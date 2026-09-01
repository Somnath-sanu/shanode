"use client"

import { useState } from "react"
import { PlusIcon, Trash2Icon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  mergeEnvVars,
  parseEnvText,
  type EnvVarPair,
} from "@/features/projects/lib/parse-env"

type EnvVarsEditorProps = {
  value: EnvVarPair[]
  onChange: (value: EnvVarPair[]) => void
  showPaste?: boolean
}

export function EnvVarsEditor({
  value,
  onChange,
  showPaste = true,
}: EnvVarsEditorProps) {
  const [pasteText, setPasteText] = useState("")

  function updateRow(index: number, patch: Partial<EnvVarPair>) {
    const next = value.map((row, i) =>
      i === index ? { ...row, ...patch } : row
    )
    onChange(next)
  }

  function removeRow(index: number) {
    onChange(value.filter((_, i) => i !== index))
  }

  function applyPaste() {
    const parsed = parseEnvText(pasteText)
    if (parsed.length === 0) {
      return
    }
    onChange(mergeEnvVars(value, parsed))
    setPasteText("")
  }

  return (
    <div className="space-y-4">
      {showPaste ? (
        <div className="space-y-2">
          <label className="text-xs font-medium text-muted-foreground">
            Paste `.env`
          </label>
          <Textarea
            value={pasteText}
            onChange={(event) => setPasteText(event.target.value)}
            placeholder={"DATABASE_URL=...\nAPI_KEY=..."}
            className="min-h-24 font-mono text-xs"
          />
          <Button
            type="button"
            size="sm"
            variant="outline"
            disabled={!pasteText.trim()}
            onClick={applyPaste}
          >
            Parse and fill
          </Button>
        </div>
      ) : null}

      <div className="flex items-center justify-between gap-3">
        <p className="text-xs text-muted-foreground">
          {value.length} variable{value.length === 1 ? "" : "s"}
        </p>
        <Button
          type="button"
          size="sm"
          variant="outline"
          onClick={() => onChange([...value, { key: "", value: "" }])}
        >
          <PlusIcon className="size-3.5" />
          Add
        </Button>
      </div>

      {value.length === 0 ? (
        <p className="text-sm text-muted-foreground">
          No environment variables yet. Paste a `.env` or add rows manually.
        </p>
      ) : (
        <div className="space-y-2">
          {value.map((row, index) => (
            <div key={index} className="flex gap-2">
              <Input
                placeholder="KEY"
                value={row.key}
                onChange={(event) =>
                  updateRow(index, { key: event.target.value })
                }
              />
              <Input
                placeholder="value"
                value={row.value}
                onChange={(event) =>
                  updateRow(index, { value: event.target.value })
                }
              />
              <Button
                type="button"
                size="icon"
                variant="ghost"
                onClick={() => removeRow(index)}
                aria-label="Remove variable"
              >
                <Trash2Icon className="size-4" />
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
