
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model EnvironmentVariable
 * 
 */
export type EnvironmentVariable = $Result.DefaultSelection<Prisma.$EnvironmentVariablePayload>
/**
 * Model Deployment
 * 
 */
export type Deployment = $Result.DefaultSelection<Prisma.$DeploymentPayload>
/**
 * Model Build
 * 
 */
export type Build = $Result.DefaultSelection<Prisma.$BuildPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const DeploymentStatus: {
  QUEUED: 'QUEUED',
  BUILDING: 'BUILDING',
  SUCCESS: 'SUCCESS',
  FAILED: 'FAILED'
};

export type DeploymentStatus = (typeof DeploymentStatus)[keyof typeof DeploymentStatus]


export const BuildStatus: {
  QUEUED: 'QUEUED',
  RUNNING: 'RUNNING',
  SUCCESS: 'SUCCESS',
  FAILED: 'FAILED'
};

export type BuildStatus = (typeof BuildStatus)[keyof typeof BuildStatus]


export const Framework: {
  NEXTJS: 'NEXTJS',
  REACT: 'REACT'
};

export type Framework = (typeof Framework)[keyof typeof Framework]

}

export type DeploymentStatus = $Enums.DeploymentStatus

export const DeploymentStatus: typeof $Enums.DeploymentStatus

export type BuildStatus = $Enums.BuildStatus

export const BuildStatus: typeof $Enums.BuildStatus

export type Framework = $Enums.Framework

export const Framework: typeof $Enums.Framework

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Projects
 * const projects = await prisma.project.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Projects
   * const projects = await prisma.project.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.environmentVariable`: Exposes CRUD operations for the **EnvironmentVariable** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EnvironmentVariables
    * const environmentVariables = await prisma.environmentVariable.findMany()
    * ```
    */
  get environmentVariable(): Prisma.EnvironmentVariableDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.deployment`: Exposes CRUD operations for the **Deployment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Deployments
    * const deployments = await prisma.deployment.findMany()
    * ```
    */
  get deployment(): Prisma.DeploymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.build`: Exposes CRUD operations for the **Build** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Builds
    * const builds = await prisma.build.findMany()
    * ```
    */
  get build(): Prisma.BuildDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.10.0
   * Query Engine version: 0edf323efd1d98336f3f0a68684b56f689b900d3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Project: 'Project',
    EnvironmentVariable: 'EnvironmentVariable',
    Deployment: 'Deployment',
    Build: 'Build'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "project" | "environmentVariable" | "deployment" | "build"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      EnvironmentVariable: {
        payload: Prisma.$EnvironmentVariablePayload<ExtArgs>
        fields: Prisma.EnvironmentVariableFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EnvironmentVariableFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentVariablePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EnvironmentVariableFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentVariablePayload>
          }
          findFirst: {
            args: Prisma.EnvironmentVariableFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentVariablePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EnvironmentVariableFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentVariablePayload>
          }
          findMany: {
            args: Prisma.EnvironmentVariableFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentVariablePayload>[]
          }
          create: {
            args: Prisma.EnvironmentVariableCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentVariablePayload>
          }
          createMany: {
            args: Prisma.EnvironmentVariableCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EnvironmentVariableCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentVariablePayload>[]
          }
          delete: {
            args: Prisma.EnvironmentVariableDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentVariablePayload>
          }
          update: {
            args: Prisma.EnvironmentVariableUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentVariablePayload>
          }
          deleteMany: {
            args: Prisma.EnvironmentVariableDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EnvironmentVariableUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EnvironmentVariableUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentVariablePayload>[]
          }
          upsert: {
            args: Prisma.EnvironmentVariableUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentVariablePayload>
          }
          aggregate: {
            args: Prisma.EnvironmentVariableAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEnvironmentVariable>
          }
          groupBy: {
            args: Prisma.EnvironmentVariableGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnvironmentVariableGroupByOutputType>[]
          }
          count: {
            args: Prisma.EnvironmentVariableCountArgs<ExtArgs>
            result: $Utils.Optional<EnvironmentVariableCountAggregateOutputType> | number
          }
        }
      }
      Deployment: {
        payload: Prisma.$DeploymentPayload<ExtArgs>
        fields: Prisma.DeploymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeploymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeploymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeploymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeploymentPayload>
          }
          findFirst: {
            args: Prisma.DeploymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeploymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeploymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeploymentPayload>
          }
          findMany: {
            args: Prisma.DeploymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeploymentPayload>[]
          }
          create: {
            args: Prisma.DeploymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeploymentPayload>
          }
          createMany: {
            args: Prisma.DeploymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeploymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeploymentPayload>[]
          }
          delete: {
            args: Prisma.DeploymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeploymentPayload>
          }
          update: {
            args: Prisma.DeploymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeploymentPayload>
          }
          deleteMany: {
            args: Prisma.DeploymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeploymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DeploymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeploymentPayload>[]
          }
          upsert: {
            args: Prisma.DeploymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeploymentPayload>
          }
          aggregate: {
            args: Prisma.DeploymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeployment>
          }
          groupBy: {
            args: Prisma.DeploymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeploymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeploymentCountArgs<ExtArgs>
            result: $Utils.Optional<DeploymentCountAggregateOutputType> | number
          }
        }
      }
      Build: {
        payload: Prisma.$BuildPayload<ExtArgs>
        fields: Prisma.BuildFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BuildFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BuildFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildPayload>
          }
          findFirst: {
            args: Prisma.BuildFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BuildFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildPayload>
          }
          findMany: {
            args: Prisma.BuildFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildPayload>[]
          }
          create: {
            args: Prisma.BuildCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildPayload>
          }
          createMany: {
            args: Prisma.BuildCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BuildCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildPayload>[]
          }
          delete: {
            args: Prisma.BuildDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildPayload>
          }
          update: {
            args: Prisma.BuildUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildPayload>
          }
          deleteMany: {
            args: Prisma.BuildDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BuildUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BuildUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildPayload>[]
          }
          upsert: {
            args: Prisma.BuildUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildPayload>
          }
          aggregate: {
            args: Prisma.BuildAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBuild>
          }
          groupBy: {
            args: Prisma.BuildGroupByArgs<ExtArgs>
            result: $Utils.Optional<BuildGroupByOutputType>[]
          }
          count: {
            args: Prisma.BuildCountArgs<ExtArgs>
            result: $Utils.Optional<BuildCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    project?: ProjectOmit
    environmentVariable?: EnvironmentVariableOmit
    deployment?: DeploymentOmit
    build?: BuildOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    deployments: number
    envVars: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deployments?: boolean | ProjectCountOutputTypeCountDeploymentsArgs
    envVars?: boolean | ProjectCountOutputTypeCountEnvVarsArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountDeploymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeploymentWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountEnvVarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnvironmentVariableWhereInput
  }


  /**
   * Count Type DeploymentCountOutputType
   */

  export type DeploymentCountOutputType = {
    builds: number
  }

  export type DeploymentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    builds?: boolean | DeploymentCountOutputTypeCountBuildsArgs
  }

  // Custom InputTypes
  /**
   * DeploymentCountOutputType without action
   */
  export type DeploymentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeploymentCountOutputType
     */
    select?: DeploymentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DeploymentCountOutputType without action
   */
  export type DeploymentCountOutputTypeCountBuildsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BuildWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectAvgAggregateOutputType = {
    repoId: number | null
  }

  export type ProjectSumAggregateOutputType = {
    repoId: bigint | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    repoUrl: string | null
    repoFullName: string | null
    repoId: bigint | null
    defaultBranch: string | null
    framework: $Enums.Framework | null
    deployedUrl: string | null
    webhookId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    repoUrl: string | null
    repoFullName: string | null
    repoId: bigint | null
    defaultBranch: string | null
    framework: $Enums.Framework | null
    deployedUrl: string | null
    webhookId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    repoUrl: number
    repoFullName: number
    repoId: number
    defaultBranch: number
    framework: number
    deployedUrl: number
    webhookId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectAvgAggregateInputType = {
    repoId?: true
  }

  export type ProjectSumAggregateInputType = {
    repoId?: true
  }

  export type ProjectMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    repoUrl?: true
    repoFullName?: true
    repoId?: true
    defaultBranch?: true
    framework?: true
    deployedUrl?: true
    webhookId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    repoUrl?: true
    repoFullName?: true
    repoId?: true
    defaultBranch?: true
    framework?: true
    deployedUrl?: true
    webhookId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    repoUrl?: true
    repoFullName?: true
    repoId?: true
    defaultBranch?: true
    framework?: true
    deployedUrl?: true
    webhookId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _avg?: ProjectAvgAggregateInputType
    _sum?: ProjectSumAggregateInputType
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    userId: string
    name: string
    repoUrl: string
    repoFullName: string
    repoId: bigint
    defaultBranch: string
    framework: $Enums.Framework
    deployedUrl: string | null
    webhookId: string | null
    createdAt: Date
    updatedAt: Date
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    repoUrl?: boolean
    repoFullName?: boolean
    repoId?: boolean
    defaultBranch?: boolean
    framework?: boolean
    deployedUrl?: boolean
    webhookId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deployments?: boolean | Project$deploymentsArgs<ExtArgs>
    envVars?: boolean | Project$envVarsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    repoUrl?: boolean
    repoFullName?: boolean
    repoId?: boolean
    defaultBranch?: boolean
    framework?: boolean
    deployedUrl?: boolean
    webhookId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    repoUrl?: boolean
    repoFullName?: boolean
    repoId?: boolean
    defaultBranch?: boolean
    framework?: boolean
    deployedUrl?: boolean
    webhookId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    repoUrl?: boolean
    repoFullName?: boolean
    repoId?: boolean
    defaultBranch?: boolean
    framework?: boolean
    deployedUrl?: boolean
    webhookId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "repoUrl" | "repoFullName" | "repoId" | "defaultBranch" | "framework" | "deployedUrl" | "webhookId" | "createdAt" | "updatedAt", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deployments?: boolean | Project$deploymentsArgs<ExtArgs>
    envVars?: boolean | Project$envVarsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      deployments: Prisma.$DeploymentPayload<ExtArgs>[]
      envVars: Prisma.$EnvironmentVariablePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      repoUrl: string
      repoFullName: string
      repoId: bigint
      defaultBranch: string
      framework: $Enums.Framework
      deployedUrl: string | null
      webhookId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    deployments<T extends Project$deploymentsArgs<ExtArgs> = {}>(args?: Subset<T, Project$deploymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeploymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    envVars<T extends Project$envVarsArgs<ExtArgs> = {}>(args?: Subset<T, Project$envVarsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnvironmentVariablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly userId: FieldRef<"Project", 'String'>
    readonly name: FieldRef<"Project", 'String'>
    readonly repoUrl: FieldRef<"Project", 'String'>
    readonly repoFullName: FieldRef<"Project", 'String'>
    readonly repoId: FieldRef<"Project", 'BigInt'>
    readonly defaultBranch: FieldRef<"Project", 'String'>
    readonly framework: FieldRef<"Project", 'Framework'>
    readonly deployedUrl: FieldRef<"Project", 'String'>
    readonly webhookId: FieldRef<"Project", 'String'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly updatedAt: FieldRef<"Project", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project.deployments
   */
  export type Project$deploymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deployment
     */
    select?: DeploymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deployment
     */
    omit?: DeploymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeploymentInclude<ExtArgs> | null
    where?: DeploymentWhereInput
    orderBy?: DeploymentOrderByWithRelationInput | DeploymentOrderByWithRelationInput[]
    cursor?: DeploymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeploymentScalarFieldEnum | DeploymentScalarFieldEnum[]
  }

  /**
   * Project.envVars
   */
  export type Project$envVarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentVariable
     */
    select?: EnvironmentVariableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnvironmentVariable
     */
    omit?: EnvironmentVariableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentVariableInclude<ExtArgs> | null
    where?: EnvironmentVariableWhereInput
    orderBy?: EnvironmentVariableOrderByWithRelationInput | EnvironmentVariableOrderByWithRelationInput[]
    cursor?: EnvironmentVariableWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnvironmentVariableScalarFieldEnum | EnvironmentVariableScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model EnvironmentVariable
   */

  export type AggregateEnvironmentVariable = {
    _count: EnvironmentVariableCountAggregateOutputType | null
    _min: EnvironmentVariableMinAggregateOutputType | null
    _max: EnvironmentVariableMaxAggregateOutputType | null
  }

  export type EnvironmentVariableMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    key: string | null
    value: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EnvironmentVariableMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    key: string | null
    value: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EnvironmentVariableCountAggregateOutputType = {
    id: number
    projectId: number
    key: number
    value: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EnvironmentVariableMinAggregateInputType = {
    id?: true
    projectId?: true
    key?: true
    value?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EnvironmentVariableMaxAggregateInputType = {
    id?: true
    projectId?: true
    key?: true
    value?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EnvironmentVariableCountAggregateInputType = {
    id?: true
    projectId?: true
    key?: true
    value?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EnvironmentVariableAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EnvironmentVariable to aggregate.
     */
    where?: EnvironmentVariableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnvironmentVariables to fetch.
     */
    orderBy?: EnvironmentVariableOrderByWithRelationInput | EnvironmentVariableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EnvironmentVariableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnvironmentVariables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnvironmentVariables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EnvironmentVariables
    **/
    _count?: true | EnvironmentVariableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnvironmentVariableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnvironmentVariableMaxAggregateInputType
  }

  export type GetEnvironmentVariableAggregateType<T extends EnvironmentVariableAggregateArgs> = {
        [P in keyof T & keyof AggregateEnvironmentVariable]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnvironmentVariable[P]>
      : GetScalarType<T[P], AggregateEnvironmentVariable[P]>
  }




  export type EnvironmentVariableGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnvironmentVariableWhereInput
    orderBy?: EnvironmentVariableOrderByWithAggregationInput | EnvironmentVariableOrderByWithAggregationInput[]
    by: EnvironmentVariableScalarFieldEnum[] | EnvironmentVariableScalarFieldEnum
    having?: EnvironmentVariableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnvironmentVariableCountAggregateInputType | true
    _min?: EnvironmentVariableMinAggregateInputType
    _max?: EnvironmentVariableMaxAggregateInputType
  }

  export type EnvironmentVariableGroupByOutputType = {
    id: string
    projectId: string
    key: string
    value: string
    createdAt: Date
    updatedAt: Date
    _count: EnvironmentVariableCountAggregateOutputType | null
    _min: EnvironmentVariableMinAggregateOutputType | null
    _max: EnvironmentVariableMaxAggregateOutputType | null
  }

  type GetEnvironmentVariableGroupByPayload<T extends EnvironmentVariableGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnvironmentVariableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnvironmentVariableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnvironmentVariableGroupByOutputType[P]>
            : GetScalarType<T[P], EnvironmentVariableGroupByOutputType[P]>
        }
      >
    >


  export type EnvironmentVariableSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    key?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["environmentVariable"]>

  export type EnvironmentVariableSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    key?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["environmentVariable"]>

  export type EnvironmentVariableSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    key?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["environmentVariable"]>

  export type EnvironmentVariableSelectScalar = {
    id?: boolean
    projectId?: boolean
    key?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EnvironmentVariableOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "key" | "value" | "createdAt" | "updatedAt", ExtArgs["result"]["environmentVariable"]>
  export type EnvironmentVariableInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type EnvironmentVariableIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type EnvironmentVariableIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $EnvironmentVariablePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EnvironmentVariable"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      key: string
      value: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["environmentVariable"]>
    composites: {}
  }

  type EnvironmentVariableGetPayload<S extends boolean | null | undefined | EnvironmentVariableDefaultArgs> = $Result.GetResult<Prisma.$EnvironmentVariablePayload, S>

  type EnvironmentVariableCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EnvironmentVariableFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EnvironmentVariableCountAggregateInputType | true
    }

  export interface EnvironmentVariableDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EnvironmentVariable'], meta: { name: 'EnvironmentVariable' } }
    /**
     * Find zero or one EnvironmentVariable that matches the filter.
     * @param {EnvironmentVariableFindUniqueArgs} args - Arguments to find a EnvironmentVariable
     * @example
     * // Get one EnvironmentVariable
     * const environmentVariable = await prisma.environmentVariable.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EnvironmentVariableFindUniqueArgs>(args: SelectSubset<T, EnvironmentVariableFindUniqueArgs<ExtArgs>>): Prisma__EnvironmentVariableClient<$Result.GetResult<Prisma.$EnvironmentVariablePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EnvironmentVariable that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EnvironmentVariableFindUniqueOrThrowArgs} args - Arguments to find a EnvironmentVariable
     * @example
     * // Get one EnvironmentVariable
     * const environmentVariable = await prisma.environmentVariable.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EnvironmentVariableFindUniqueOrThrowArgs>(args: SelectSubset<T, EnvironmentVariableFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EnvironmentVariableClient<$Result.GetResult<Prisma.$EnvironmentVariablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EnvironmentVariable that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnvironmentVariableFindFirstArgs} args - Arguments to find a EnvironmentVariable
     * @example
     * // Get one EnvironmentVariable
     * const environmentVariable = await prisma.environmentVariable.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EnvironmentVariableFindFirstArgs>(args?: SelectSubset<T, EnvironmentVariableFindFirstArgs<ExtArgs>>): Prisma__EnvironmentVariableClient<$Result.GetResult<Prisma.$EnvironmentVariablePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EnvironmentVariable that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnvironmentVariableFindFirstOrThrowArgs} args - Arguments to find a EnvironmentVariable
     * @example
     * // Get one EnvironmentVariable
     * const environmentVariable = await prisma.environmentVariable.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EnvironmentVariableFindFirstOrThrowArgs>(args?: SelectSubset<T, EnvironmentVariableFindFirstOrThrowArgs<ExtArgs>>): Prisma__EnvironmentVariableClient<$Result.GetResult<Prisma.$EnvironmentVariablePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EnvironmentVariables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnvironmentVariableFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EnvironmentVariables
     * const environmentVariables = await prisma.environmentVariable.findMany()
     * 
     * // Get first 10 EnvironmentVariables
     * const environmentVariables = await prisma.environmentVariable.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const environmentVariableWithIdOnly = await prisma.environmentVariable.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EnvironmentVariableFindManyArgs>(args?: SelectSubset<T, EnvironmentVariableFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnvironmentVariablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EnvironmentVariable.
     * @param {EnvironmentVariableCreateArgs} args - Arguments to create a EnvironmentVariable.
     * @example
     * // Create one EnvironmentVariable
     * const EnvironmentVariable = await prisma.environmentVariable.create({
     *   data: {
     *     // ... data to create a EnvironmentVariable
     *   }
     * })
     * 
     */
    create<T extends EnvironmentVariableCreateArgs>(args: SelectSubset<T, EnvironmentVariableCreateArgs<ExtArgs>>): Prisma__EnvironmentVariableClient<$Result.GetResult<Prisma.$EnvironmentVariablePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EnvironmentVariables.
     * @param {EnvironmentVariableCreateManyArgs} args - Arguments to create many EnvironmentVariables.
     * @example
     * // Create many EnvironmentVariables
     * const environmentVariable = await prisma.environmentVariable.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EnvironmentVariableCreateManyArgs>(args?: SelectSubset<T, EnvironmentVariableCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EnvironmentVariables and returns the data saved in the database.
     * @param {EnvironmentVariableCreateManyAndReturnArgs} args - Arguments to create many EnvironmentVariables.
     * @example
     * // Create many EnvironmentVariables
     * const environmentVariable = await prisma.environmentVariable.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EnvironmentVariables and only return the `id`
     * const environmentVariableWithIdOnly = await prisma.environmentVariable.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EnvironmentVariableCreateManyAndReturnArgs>(args?: SelectSubset<T, EnvironmentVariableCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnvironmentVariablePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EnvironmentVariable.
     * @param {EnvironmentVariableDeleteArgs} args - Arguments to delete one EnvironmentVariable.
     * @example
     * // Delete one EnvironmentVariable
     * const EnvironmentVariable = await prisma.environmentVariable.delete({
     *   where: {
     *     // ... filter to delete one EnvironmentVariable
     *   }
     * })
     * 
     */
    delete<T extends EnvironmentVariableDeleteArgs>(args: SelectSubset<T, EnvironmentVariableDeleteArgs<ExtArgs>>): Prisma__EnvironmentVariableClient<$Result.GetResult<Prisma.$EnvironmentVariablePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EnvironmentVariable.
     * @param {EnvironmentVariableUpdateArgs} args - Arguments to update one EnvironmentVariable.
     * @example
     * // Update one EnvironmentVariable
     * const environmentVariable = await prisma.environmentVariable.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EnvironmentVariableUpdateArgs>(args: SelectSubset<T, EnvironmentVariableUpdateArgs<ExtArgs>>): Prisma__EnvironmentVariableClient<$Result.GetResult<Prisma.$EnvironmentVariablePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EnvironmentVariables.
     * @param {EnvironmentVariableDeleteManyArgs} args - Arguments to filter EnvironmentVariables to delete.
     * @example
     * // Delete a few EnvironmentVariables
     * const { count } = await prisma.environmentVariable.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EnvironmentVariableDeleteManyArgs>(args?: SelectSubset<T, EnvironmentVariableDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EnvironmentVariables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnvironmentVariableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EnvironmentVariables
     * const environmentVariable = await prisma.environmentVariable.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EnvironmentVariableUpdateManyArgs>(args: SelectSubset<T, EnvironmentVariableUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EnvironmentVariables and returns the data updated in the database.
     * @param {EnvironmentVariableUpdateManyAndReturnArgs} args - Arguments to update many EnvironmentVariables.
     * @example
     * // Update many EnvironmentVariables
     * const environmentVariable = await prisma.environmentVariable.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EnvironmentVariables and only return the `id`
     * const environmentVariableWithIdOnly = await prisma.environmentVariable.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EnvironmentVariableUpdateManyAndReturnArgs>(args: SelectSubset<T, EnvironmentVariableUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnvironmentVariablePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EnvironmentVariable.
     * @param {EnvironmentVariableUpsertArgs} args - Arguments to update or create a EnvironmentVariable.
     * @example
     * // Update or create a EnvironmentVariable
     * const environmentVariable = await prisma.environmentVariable.upsert({
     *   create: {
     *     // ... data to create a EnvironmentVariable
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EnvironmentVariable we want to update
     *   }
     * })
     */
    upsert<T extends EnvironmentVariableUpsertArgs>(args: SelectSubset<T, EnvironmentVariableUpsertArgs<ExtArgs>>): Prisma__EnvironmentVariableClient<$Result.GetResult<Prisma.$EnvironmentVariablePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EnvironmentVariables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnvironmentVariableCountArgs} args - Arguments to filter EnvironmentVariables to count.
     * @example
     * // Count the number of EnvironmentVariables
     * const count = await prisma.environmentVariable.count({
     *   where: {
     *     // ... the filter for the EnvironmentVariables we want to count
     *   }
     * })
    **/
    count<T extends EnvironmentVariableCountArgs>(
      args?: Subset<T, EnvironmentVariableCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnvironmentVariableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EnvironmentVariable.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnvironmentVariableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EnvironmentVariableAggregateArgs>(args: Subset<T, EnvironmentVariableAggregateArgs>): Prisma.PrismaPromise<GetEnvironmentVariableAggregateType<T>>

    /**
     * Group by EnvironmentVariable.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnvironmentVariableGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EnvironmentVariableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EnvironmentVariableGroupByArgs['orderBy'] }
        : { orderBy?: EnvironmentVariableGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EnvironmentVariableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnvironmentVariableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EnvironmentVariable model
   */
  readonly fields: EnvironmentVariableFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EnvironmentVariable.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EnvironmentVariableClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EnvironmentVariable model
   */
  interface EnvironmentVariableFieldRefs {
    readonly id: FieldRef<"EnvironmentVariable", 'String'>
    readonly projectId: FieldRef<"EnvironmentVariable", 'String'>
    readonly key: FieldRef<"EnvironmentVariable", 'String'>
    readonly value: FieldRef<"EnvironmentVariable", 'String'>
    readonly createdAt: FieldRef<"EnvironmentVariable", 'DateTime'>
    readonly updatedAt: FieldRef<"EnvironmentVariable", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EnvironmentVariable findUnique
   */
  export type EnvironmentVariableFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentVariable
     */
    select?: EnvironmentVariableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnvironmentVariable
     */
    omit?: EnvironmentVariableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentVariableInclude<ExtArgs> | null
    /**
     * Filter, which EnvironmentVariable to fetch.
     */
    where: EnvironmentVariableWhereUniqueInput
  }

  /**
   * EnvironmentVariable findUniqueOrThrow
   */
  export type EnvironmentVariableFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentVariable
     */
    select?: EnvironmentVariableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnvironmentVariable
     */
    omit?: EnvironmentVariableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentVariableInclude<ExtArgs> | null
    /**
     * Filter, which EnvironmentVariable to fetch.
     */
    where: EnvironmentVariableWhereUniqueInput
  }

  /**
   * EnvironmentVariable findFirst
   */
  export type EnvironmentVariableFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentVariable
     */
    select?: EnvironmentVariableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnvironmentVariable
     */
    omit?: EnvironmentVariableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentVariableInclude<ExtArgs> | null
    /**
     * Filter, which EnvironmentVariable to fetch.
     */
    where?: EnvironmentVariableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnvironmentVariables to fetch.
     */
    orderBy?: EnvironmentVariableOrderByWithRelationInput | EnvironmentVariableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EnvironmentVariables.
     */
    cursor?: EnvironmentVariableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnvironmentVariables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnvironmentVariables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EnvironmentVariables.
     */
    distinct?: EnvironmentVariableScalarFieldEnum | EnvironmentVariableScalarFieldEnum[]
  }

  /**
   * EnvironmentVariable findFirstOrThrow
   */
  export type EnvironmentVariableFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentVariable
     */
    select?: EnvironmentVariableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnvironmentVariable
     */
    omit?: EnvironmentVariableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentVariableInclude<ExtArgs> | null
    /**
     * Filter, which EnvironmentVariable to fetch.
     */
    where?: EnvironmentVariableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnvironmentVariables to fetch.
     */
    orderBy?: EnvironmentVariableOrderByWithRelationInput | EnvironmentVariableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EnvironmentVariables.
     */
    cursor?: EnvironmentVariableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnvironmentVariables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnvironmentVariables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EnvironmentVariables.
     */
    distinct?: EnvironmentVariableScalarFieldEnum | EnvironmentVariableScalarFieldEnum[]
  }

  /**
   * EnvironmentVariable findMany
   */
  export type EnvironmentVariableFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentVariable
     */
    select?: EnvironmentVariableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnvironmentVariable
     */
    omit?: EnvironmentVariableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentVariableInclude<ExtArgs> | null
    /**
     * Filter, which EnvironmentVariables to fetch.
     */
    where?: EnvironmentVariableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnvironmentVariables to fetch.
     */
    orderBy?: EnvironmentVariableOrderByWithRelationInput | EnvironmentVariableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EnvironmentVariables.
     */
    cursor?: EnvironmentVariableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnvironmentVariables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnvironmentVariables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EnvironmentVariables.
     */
    distinct?: EnvironmentVariableScalarFieldEnum | EnvironmentVariableScalarFieldEnum[]
  }

  /**
   * EnvironmentVariable create
   */
  export type EnvironmentVariableCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentVariable
     */
    select?: EnvironmentVariableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnvironmentVariable
     */
    omit?: EnvironmentVariableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentVariableInclude<ExtArgs> | null
    /**
     * The data needed to create a EnvironmentVariable.
     */
    data: XOR<EnvironmentVariableCreateInput, EnvironmentVariableUncheckedCreateInput>
  }

  /**
   * EnvironmentVariable createMany
   */
  export type EnvironmentVariableCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EnvironmentVariables.
     */
    data: EnvironmentVariableCreateManyInput | EnvironmentVariableCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EnvironmentVariable createManyAndReturn
   */
  export type EnvironmentVariableCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentVariable
     */
    select?: EnvironmentVariableSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EnvironmentVariable
     */
    omit?: EnvironmentVariableOmit<ExtArgs> | null
    /**
     * The data used to create many EnvironmentVariables.
     */
    data: EnvironmentVariableCreateManyInput | EnvironmentVariableCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentVariableIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EnvironmentVariable update
   */
  export type EnvironmentVariableUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentVariable
     */
    select?: EnvironmentVariableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnvironmentVariable
     */
    omit?: EnvironmentVariableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentVariableInclude<ExtArgs> | null
    /**
     * The data needed to update a EnvironmentVariable.
     */
    data: XOR<EnvironmentVariableUpdateInput, EnvironmentVariableUncheckedUpdateInput>
    /**
     * Choose, which EnvironmentVariable to update.
     */
    where: EnvironmentVariableWhereUniqueInput
  }

  /**
   * EnvironmentVariable updateMany
   */
  export type EnvironmentVariableUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EnvironmentVariables.
     */
    data: XOR<EnvironmentVariableUpdateManyMutationInput, EnvironmentVariableUncheckedUpdateManyInput>
    /**
     * Filter which EnvironmentVariables to update
     */
    where?: EnvironmentVariableWhereInput
    /**
     * Limit how many EnvironmentVariables to update.
     */
    limit?: number
  }

  /**
   * EnvironmentVariable updateManyAndReturn
   */
  export type EnvironmentVariableUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentVariable
     */
    select?: EnvironmentVariableSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EnvironmentVariable
     */
    omit?: EnvironmentVariableOmit<ExtArgs> | null
    /**
     * The data used to update EnvironmentVariables.
     */
    data: XOR<EnvironmentVariableUpdateManyMutationInput, EnvironmentVariableUncheckedUpdateManyInput>
    /**
     * Filter which EnvironmentVariables to update
     */
    where?: EnvironmentVariableWhereInput
    /**
     * Limit how many EnvironmentVariables to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentVariableIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EnvironmentVariable upsert
   */
  export type EnvironmentVariableUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentVariable
     */
    select?: EnvironmentVariableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnvironmentVariable
     */
    omit?: EnvironmentVariableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentVariableInclude<ExtArgs> | null
    /**
     * The filter to search for the EnvironmentVariable to update in case it exists.
     */
    where: EnvironmentVariableWhereUniqueInput
    /**
     * In case the EnvironmentVariable found by the `where` argument doesn't exist, create a new EnvironmentVariable with this data.
     */
    create: XOR<EnvironmentVariableCreateInput, EnvironmentVariableUncheckedCreateInput>
    /**
     * In case the EnvironmentVariable was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EnvironmentVariableUpdateInput, EnvironmentVariableUncheckedUpdateInput>
  }

  /**
   * EnvironmentVariable delete
   */
  export type EnvironmentVariableDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentVariable
     */
    select?: EnvironmentVariableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnvironmentVariable
     */
    omit?: EnvironmentVariableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentVariableInclude<ExtArgs> | null
    /**
     * Filter which EnvironmentVariable to delete.
     */
    where: EnvironmentVariableWhereUniqueInput
  }

  /**
   * EnvironmentVariable deleteMany
   */
  export type EnvironmentVariableDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EnvironmentVariables to delete
     */
    where?: EnvironmentVariableWhereInput
    /**
     * Limit how many EnvironmentVariables to delete.
     */
    limit?: number
  }

  /**
   * EnvironmentVariable without action
   */
  export type EnvironmentVariableDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentVariable
     */
    select?: EnvironmentVariableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnvironmentVariable
     */
    omit?: EnvironmentVariableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentVariableInclude<ExtArgs> | null
  }


  /**
   * Model Deployment
   */

  export type AggregateDeployment = {
    _count: DeploymentCountAggregateOutputType | null
    _min: DeploymentMinAggregateOutputType | null
    _max: DeploymentMaxAggregateOutputType | null
  }

  export type DeploymentMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    status: $Enums.DeploymentStatus | null
    branch: string | null
    commitSha: string | null
    commitMessage: string | null
    deployedUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DeploymentMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    status: $Enums.DeploymentStatus | null
    branch: string | null
    commitSha: string | null
    commitMessage: string | null
    deployedUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DeploymentCountAggregateOutputType = {
    id: number
    projectId: number
    status: number
    branch: number
    commitSha: number
    commitMessage: number
    deployedUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DeploymentMinAggregateInputType = {
    id?: true
    projectId?: true
    status?: true
    branch?: true
    commitSha?: true
    commitMessage?: true
    deployedUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DeploymentMaxAggregateInputType = {
    id?: true
    projectId?: true
    status?: true
    branch?: true
    commitSha?: true
    commitMessage?: true
    deployedUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DeploymentCountAggregateInputType = {
    id?: true
    projectId?: true
    status?: true
    branch?: true
    commitSha?: true
    commitMessage?: true
    deployedUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DeploymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Deployment to aggregate.
     */
    where?: DeploymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deployments to fetch.
     */
    orderBy?: DeploymentOrderByWithRelationInput | DeploymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeploymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deployments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deployments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Deployments
    **/
    _count?: true | DeploymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeploymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeploymentMaxAggregateInputType
  }

  export type GetDeploymentAggregateType<T extends DeploymentAggregateArgs> = {
        [P in keyof T & keyof AggregateDeployment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeployment[P]>
      : GetScalarType<T[P], AggregateDeployment[P]>
  }




  export type DeploymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeploymentWhereInput
    orderBy?: DeploymentOrderByWithAggregationInput | DeploymentOrderByWithAggregationInput[]
    by: DeploymentScalarFieldEnum[] | DeploymentScalarFieldEnum
    having?: DeploymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeploymentCountAggregateInputType | true
    _min?: DeploymentMinAggregateInputType
    _max?: DeploymentMaxAggregateInputType
  }

  export type DeploymentGroupByOutputType = {
    id: string
    projectId: string
    status: $Enums.DeploymentStatus
    branch: string
    commitSha: string | null
    commitMessage: string | null
    deployedUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: DeploymentCountAggregateOutputType | null
    _min: DeploymentMinAggregateOutputType | null
    _max: DeploymentMaxAggregateOutputType | null
  }

  type GetDeploymentGroupByPayload<T extends DeploymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeploymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeploymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeploymentGroupByOutputType[P]>
            : GetScalarType<T[P], DeploymentGroupByOutputType[P]>
        }
      >
    >


  export type DeploymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    status?: boolean
    branch?: boolean
    commitSha?: boolean
    commitMessage?: boolean
    deployedUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    builds?: boolean | Deployment$buildsArgs<ExtArgs>
    _count?: boolean | DeploymentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deployment"]>

  export type DeploymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    status?: boolean
    branch?: boolean
    commitSha?: boolean
    commitMessage?: boolean
    deployedUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deployment"]>

  export type DeploymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    status?: boolean
    branch?: boolean
    commitSha?: boolean
    commitMessage?: boolean
    deployedUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deployment"]>

  export type DeploymentSelectScalar = {
    id?: boolean
    projectId?: boolean
    status?: boolean
    branch?: boolean
    commitSha?: boolean
    commitMessage?: boolean
    deployedUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DeploymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "status" | "branch" | "commitSha" | "commitMessage" | "deployedUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["deployment"]>
  export type DeploymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    builds?: boolean | Deployment$buildsArgs<ExtArgs>
    _count?: boolean | DeploymentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DeploymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type DeploymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $DeploymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Deployment"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      builds: Prisma.$BuildPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      status: $Enums.DeploymentStatus
      branch: string
      commitSha: string | null
      commitMessage: string | null
      deployedUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["deployment"]>
    composites: {}
  }

  type DeploymentGetPayload<S extends boolean | null | undefined | DeploymentDefaultArgs> = $Result.GetResult<Prisma.$DeploymentPayload, S>

  type DeploymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeploymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeploymentCountAggregateInputType | true
    }

  export interface DeploymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Deployment'], meta: { name: 'Deployment' } }
    /**
     * Find zero or one Deployment that matches the filter.
     * @param {DeploymentFindUniqueArgs} args - Arguments to find a Deployment
     * @example
     * // Get one Deployment
     * const deployment = await prisma.deployment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeploymentFindUniqueArgs>(args: SelectSubset<T, DeploymentFindUniqueArgs<ExtArgs>>): Prisma__DeploymentClient<$Result.GetResult<Prisma.$DeploymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Deployment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeploymentFindUniqueOrThrowArgs} args - Arguments to find a Deployment
     * @example
     * // Get one Deployment
     * const deployment = await prisma.deployment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeploymentFindUniqueOrThrowArgs>(args: SelectSubset<T, DeploymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeploymentClient<$Result.GetResult<Prisma.$DeploymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Deployment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeploymentFindFirstArgs} args - Arguments to find a Deployment
     * @example
     * // Get one Deployment
     * const deployment = await prisma.deployment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeploymentFindFirstArgs>(args?: SelectSubset<T, DeploymentFindFirstArgs<ExtArgs>>): Prisma__DeploymentClient<$Result.GetResult<Prisma.$DeploymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Deployment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeploymentFindFirstOrThrowArgs} args - Arguments to find a Deployment
     * @example
     * // Get one Deployment
     * const deployment = await prisma.deployment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeploymentFindFirstOrThrowArgs>(args?: SelectSubset<T, DeploymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeploymentClient<$Result.GetResult<Prisma.$DeploymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Deployments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeploymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Deployments
     * const deployments = await prisma.deployment.findMany()
     * 
     * // Get first 10 Deployments
     * const deployments = await prisma.deployment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deploymentWithIdOnly = await prisma.deployment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeploymentFindManyArgs>(args?: SelectSubset<T, DeploymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeploymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Deployment.
     * @param {DeploymentCreateArgs} args - Arguments to create a Deployment.
     * @example
     * // Create one Deployment
     * const Deployment = await prisma.deployment.create({
     *   data: {
     *     // ... data to create a Deployment
     *   }
     * })
     * 
     */
    create<T extends DeploymentCreateArgs>(args: SelectSubset<T, DeploymentCreateArgs<ExtArgs>>): Prisma__DeploymentClient<$Result.GetResult<Prisma.$DeploymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Deployments.
     * @param {DeploymentCreateManyArgs} args - Arguments to create many Deployments.
     * @example
     * // Create many Deployments
     * const deployment = await prisma.deployment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeploymentCreateManyArgs>(args?: SelectSubset<T, DeploymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Deployments and returns the data saved in the database.
     * @param {DeploymentCreateManyAndReturnArgs} args - Arguments to create many Deployments.
     * @example
     * // Create many Deployments
     * const deployment = await prisma.deployment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Deployments and only return the `id`
     * const deploymentWithIdOnly = await prisma.deployment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeploymentCreateManyAndReturnArgs>(args?: SelectSubset<T, DeploymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeploymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Deployment.
     * @param {DeploymentDeleteArgs} args - Arguments to delete one Deployment.
     * @example
     * // Delete one Deployment
     * const Deployment = await prisma.deployment.delete({
     *   where: {
     *     // ... filter to delete one Deployment
     *   }
     * })
     * 
     */
    delete<T extends DeploymentDeleteArgs>(args: SelectSubset<T, DeploymentDeleteArgs<ExtArgs>>): Prisma__DeploymentClient<$Result.GetResult<Prisma.$DeploymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Deployment.
     * @param {DeploymentUpdateArgs} args - Arguments to update one Deployment.
     * @example
     * // Update one Deployment
     * const deployment = await prisma.deployment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeploymentUpdateArgs>(args: SelectSubset<T, DeploymentUpdateArgs<ExtArgs>>): Prisma__DeploymentClient<$Result.GetResult<Prisma.$DeploymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Deployments.
     * @param {DeploymentDeleteManyArgs} args - Arguments to filter Deployments to delete.
     * @example
     * // Delete a few Deployments
     * const { count } = await prisma.deployment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeploymentDeleteManyArgs>(args?: SelectSubset<T, DeploymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Deployments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeploymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Deployments
     * const deployment = await prisma.deployment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeploymentUpdateManyArgs>(args: SelectSubset<T, DeploymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Deployments and returns the data updated in the database.
     * @param {DeploymentUpdateManyAndReturnArgs} args - Arguments to update many Deployments.
     * @example
     * // Update many Deployments
     * const deployment = await prisma.deployment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Deployments and only return the `id`
     * const deploymentWithIdOnly = await prisma.deployment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DeploymentUpdateManyAndReturnArgs>(args: SelectSubset<T, DeploymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeploymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Deployment.
     * @param {DeploymentUpsertArgs} args - Arguments to update or create a Deployment.
     * @example
     * // Update or create a Deployment
     * const deployment = await prisma.deployment.upsert({
     *   create: {
     *     // ... data to create a Deployment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Deployment we want to update
     *   }
     * })
     */
    upsert<T extends DeploymentUpsertArgs>(args: SelectSubset<T, DeploymentUpsertArgs<ExtArgs>>): Prisma__DeploymentClient<$Result.GetResult<Prisma.$DeploymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Deployments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeploymentCountArgs} args - Arguments to filter Deployments to count.
     * @example
     * // Count the number of Deployments
     * const count = await prisma.deployment.count({
     *   where: {
     *     // ... the filter for the Deployments we want to count
     *   }
     * })
    **/
    count<T extends DeploymentCountArgs>(
      args?: Subset<T, DeploymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeploymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Deployment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeploymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DeploymentAggregateArgs>(args: Subset<T, DeploymentAggregateArgs>): Prisma.PrismaPromise<GetDeploymentAggregateType<T>>

    /**
     * Group by Deployment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeploymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DeploymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeploymentGroupByArgs['orderBy'] }
        : { orderBy?: DeploymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DeploymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeploymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Deployment model
   */
  readonly fields: DeploymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Deployment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeploymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    builds<T extends Deployment$buildsArgs<ExtArgs> = {}>(args?: Subset<T, Deployment$buildsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BuildPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Deployment model
   */
  interface DeploymentFieldRefs {
    readonly id: FieldRef<"Deployment", 'String'>
    readonly projectId: FieldRef<"Deployment", 'String'>
    readonly status: FieldRef<"Deployment", 'DeploymentStatus'>
    readonly branch: FieldRef<"Deployment", 'String'>
    readonly commitSha: FieldRef<"Deployment", 'String'>
    readonly commitMessage: FieldRef<"Deployment", 'String'>
    readonly deployedUrl: FieldRef<"Deployment", 'String'>
    readonly createdAt: FieldRef<"Deployment", 'DateTime'>
    readonly updatedAt: FieldRef<"Deployment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Deployment findUnique
   */
  export type DeploymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deployment
     */
    select?: DeploymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deployment
     */
    omit?: DeploymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeploymentInclude<ExtArgs> | null
    /**
     * Filter, which Deployment to fetch.
     */
    where: DeploymentWhereUniqueInput
  }

  /**
   * Deployment findUniqueOrThrow
   */
  export type DeploymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deployment
     */
    select?: DeploymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deployment
     */
    omit?: DeploymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeploymentInclude<ExtArgs> | null
    /**
     * Filter, which Deployment to fetch.
     */
    where: DeploymentWhereUniqueInput
  }

  /**
   * Deployment findFirst
   */
  export type DeploymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deployment
     */
    select?: DeploymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deployment
     */
    omit?: DeploymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeploymentInclude<ExtArgs> | null
    /**
     * Filter, which Deployment to fetch.
     */
    where?: DeploymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deployments to fetch.
     */
    orderBy?: DeploymentOrderByWithRelationInput | DeploymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Deployments.
     */
    cursor?: DeploymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deployments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deployments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Deployments.
     */
    distinct?: DeploymentScalarFieldEnum | DeploymentScalarFieldEnum[]
  }

  /**
   * Deployment findFirstOrThrow
   */
  export type DeploymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deployment
     */
    select?: DeploymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deployment
     */
    omit?: DeploymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeploymentInclude<ExtArgs> | null
    /**
     * Filter, which Deployment to fetch.
     */
    where?: DeploymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deployments to fetch.
     */
    orderBy?: DeploymentOrderByWithRelationInput | DeploymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Deployments.
     */
    cursor?: DeploymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deployments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deployments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Deployments.
     */
    distinct?: DeploymentScalarFieldEnum | DeploymentScalarFieldEnum[]
  }

  /**
   * Deployment findMany
   */
  export type DeploymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deployment
     */
    select?: DeploymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deployment
     */
    omit?: DeploymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeploymentInclude<ExtArgs> | null
    /**
     * Filter, which Deployments to fetch.
     */
    where?: DeploymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deployments to fetch.
     */
    orderBy?: DeploymentOrderByWithRelationInput | DeploymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Deployments.
     */
    cursor?: DeploymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deployments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deployments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Deployments.
     */
    distinct?: DeploymentScalarFieldEnum | DeploymentScalarFieldEnum[]
  }

  /**
   * Deployment create
   */
  export type DeploymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deployment
     */
    select?: DeploymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deployment
     */
    omit?: DeploymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeploymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Deployment.
     */
    data: XOR<DeploymentCreateInput, DeploymentUncheckedCreateInput>
  }

  /**
   * Deployment createMany
   */
  export type DeploymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Deployments.
     */
    data: DeploymentCreateManyInput | DeploymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Deployment createManyAndReturn
   */
  export type DeploymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deployment
     */
    select?: DeploymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Deployment
     */
    omit?: DeploymentOmit<ExtArgs> | null
    /**
     * The data used to create many Deployments.
     */
    data: DeploymentCreateManyInput | DeploymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeploymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Deployment update
   */
  export type DeploymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deployment
     */
    select?: DeploymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deployment
     */
    omit?: DeploymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeploymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Deployment.
     */
    data: XOR<DeploymentUpdateInput, DeploymentUncheckedUpdateInput>
    /**
     * Choose, which Deployment to update.
     */
    where: DeploymentWhereUniqueInput
  }

  /**
   * Deployment updateMany
   */
  export type DeploymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Deployments.
     */
    data: XOR<DeploymentUpdateManyMutationInput, DeploymentUncheckedUpdateManyInput>
    /**
     * Filter which Deployments to update
     */
    where?: DeploymentWhereInput
    /**
     * Limit how many Deployments to update.
     */
    limit?: number
  }

  /**
   * Deployment updateManyAndReturn
   */
  export type DeploymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deployment
     */
    select?: DeploymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Deployment
     */
    omit?: DeploymentOmit<ExtArgs> | null
    /**
     * The data used to update Deployments.
     */
    data: XOR<DeploymentUpdateManyMutationInput, DeploymentUncheckedUpdateManyInput>
    /**
     * Filter which Deployments to update
     */
    where?: DeploymentWhereInput
    /**
     * Limit how many Deployments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeploymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Deployment upsert
   */
  export type DeploymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deployment
     */
    select?: DeploymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deployment
     */
    omit?: DeploymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeploymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Deployment to update in case it exists.
     */
    where: DeploymentWhereUniqueInput
    /**
     * In case the Deployment found by the `where` argument doesn't exist, create a new Deployment with this data.
     */
    create: XOR<DeploymentCreateInput, DeploymentUncheckedCreateInput>
    /**
     * In case the Deployment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeploymentUpdateInput, DeploymentUncheckedUpdateInput>
  }

  /**
   * Deployment delete
   */
  export type DeploymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deployment
     */
    select?: DeploymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deployment
     */
    omit?: DeploymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeploymentInclude<ExtArgs> | null
    /**
     * Filter which Deployment to delete.
     */
    where: DeploymentWhereUniqueInput
  }

  /**
   * Deployment deleteMany
   */
  export type DeploymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Deployments to delete
     */
    where?: DeploymentWhereInput
    /**
     * Limit how many Deployments to delete.
     */
    limit?: number
  }

  /**
   * Deployment.builds
   */
  export type Deployment$buildsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Build
     */
    select?: BuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Build
     */
    omit?: BuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildInclude<ExtArgs> | null
    where?: BuildWhereInput
    orderBy?: BuildOrderByWithRelationInput | BuildOrderByWithRelationInput[]
    cursor?: BuildWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BuildScalarFieldEnum | BuildScalarFieldEnum[]
  }

  /**
   * Deployment without action
   */
  export type DeploymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deployment
     */
    select?: DeploymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deployment
     */
    omit?: DeploymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeploymentInclude<ExtArgs> | null
  }


  /**
   * Model Build
   */

  export type AggregateBuild = {
    _count: BuildCountAggregateOutputType | null
    _min: BuildMinAggregateOutputType | null
    _max: BuildMaxAggregateOutputType | null
  }

  export type BuildMinAggregateOutputType = {
    id: string | null
    deploymentId: string | null
    status: $Enums.BuildStatus | null
    logs: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BuildMaxAggregateOutputType = {
    id: string | null
    deploymentId: string | null
    status: $Enums.BuildStatus | null
    logs: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BuildCountAggregateOutputType = {
    id: number
    deploymentId: number
    status: number
    logs: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BuildMinAggregateInputType = {
    id?: true
    deploymentId?: true
    status?: true
    logs?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BuildMaxAggregateInputType = {
    id?: true
    deploymentId?: true
    status?: true
    logs?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BuildCountAggregateInputType = {
    id?: true
    deploymentId?: true
    status?: true
    logs?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BuildAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Build to aggregate.
     */
    where?: BuildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Builds to fetch.
     */
    orderBy?: BuildOrderByWithRelationInput | BuildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BuildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Builds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Builds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Builds
    **/
    _count?: true | BuildCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BuildMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BuildMaxAggregateInputType
  }

  export type GetBuildAggregateType<T extends BuildAggregateArgs> = {
        [P in keyof T & keyof AggregateBuild]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBuild[P]>
      : GetScalarType<T[P], AggregateBuild[P]>
  }




  export type BuildGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BuildWhereInput
    orderBy?: BuildOrderByWithAggregationInput | BuildOrderByWithAggregationInput[]
    by: BuildScalarFieldEnum[] | BuildScalarFieldEnum
    having?: BuildScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BuildCountAggregateInputType | true
    _min?: BuildMinAggregateInputType
    _max?: BuildMaxAggregateInputType
  }

  export type BuildGroupByOutputType = {
    id: string
    deploymentId: string
    status: $Enums.BuildStatus
    logs: string | null
    createdAt: Date
    updatedAt: Date
    _count: BuildCountAggregateOutputType | null
    _min: BuildMinAggregateOutputType | null
    _max: BuildMaxAggregateOutputType | null
  }

  type GetBuildGroupByPayload<T extends BuildGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BuildGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BuildGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BuildGroupByOutputType[P]>
            : GetScalarType<T[P], BuildGroupByOutputType[P]>
        }
      >
    >


  export type BuildSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deploymentId?: boolean
    status?: boolean
    logs?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deployment?: boolean | DeploymentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["build"]>

  export type BuildSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deploymentId?: boolean
    status?: boolean
    logs?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deployment?: boolean | DeploymentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["build"]>

  export type BuildSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deploymentId?: boolean
    status?: boolean
    logs?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deployment?: boolean | DeploymentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["build"]>

  export type BuildSelectScalar = {
    id?: boolean
    deploymentId?: boolean
    status?: boolean
    logs?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BuildOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "deploymentId" | "status" | "logs" | "createdAt" | "updatedAt", ExtArgs["result"]["build"]>
  export type BuildInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deployment?: boolean | DeploymentDefaultArgs<ExtArgs>
  }
  export type BuildIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deployment?: boolean | DeploymentDefaultArgs<ExtArgs>
  }
  export type BuildIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deployment?: boolean | DeploymentDefaultArgs<ExtArgs>
  }

  export type $BuildPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Build"
    objects: {
      deployment: Prisma.$DeploymentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      deploymentId: string
      status: $Enums.BuildStatus
      logs: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["build"]>
    composites: {}
  }

  type BuildGetPayload<S extends boolean | null | undefined | BuildDefaultArgs> = $Result.GetResult<Prisma.$BuildPayload, S>

  type BuildCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BuildFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BuildCountAggregateInputType | true
    }

  export interface BuildDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Build'], meta: { name: 'Build' } }
    /**
     * Find zero or one Build that matches the filter.
     * @param {BuildFindUniqueArgs} args - Arguments to find a Build
     * @example
     * // Get one Build
     * const build = await prisma.build.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BuildFindUniqueArgs>(args: SelectSubset<T, BuildFindUniqueArgs<ExtArgs>>): Prisma__BuildClient<$Result.GetResult<Prisma.$BuildPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Build that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BuildFindUniqueOrThrowArgs} args - Arguments to find a Build
     * @example
     * // Get one Build
     * const build = await prisma.build.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BuildFindUniqueOrThrowArgs>(args: SelectSubset<T, BuildFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BuildClient<$Result.GetResult<Prisma.$BuildPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Build that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildFindFirstArgs} args - Arguments to find a Build
     * @example
     * // Get one Build
     * const build = await prisma.build.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BuildFindFirstArgs>(args?: SelectSubset<T, BuildFindFirstArgs<ExtArgs>>): Prisma__BuildClient<$Result.GetResult<Prisma.$BuildPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Build that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildFindFirstOrThrowArgs} args - Arguments to find a Build
     * @example
     * // Get one Build
     * const build = await prisma.build.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BuildFindFirstOrThrowArgs>(args?: SelectSubset<T, BuildFindFirstOrThrowArgs<ExtArgs>>): Prisma__BuildClient<$Result.GetResult<Prisma.$BuildPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Builds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Builds
     * const builds = await prisma.build.findMany()
     * 
     * // Get first 10 Builds
     * const builds = await prisma.build.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const buildWithIdOnly = await prisma.build.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BuildFindManyArgs>(args?: SelectSubset<T, BuildFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BuildPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Build.
     * @param {BuildCreateArgs} args - Arguments to create a Build.
     * @example
     * // Create one Build
     * const Build = await prisma.build.create({
     *   data: {
     *     // ... data to create a Build
     *   }
     * })
     * 
     */
    create<T extends BuildCreateArgs>(args: SelectSubset<T, BuildCreateArgs<ExtArgs>>): Prisma__BuildClient<$Result.GetResult<Prisma.$BuildPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Builds.
     * @param {BuildCreateManyArgs} args - Arguments to create many Builds.
     * @example
     * // Create many Builds
     * const build = await prisma.build.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BuildCreateManyArgs>(args?: SelectSubset<T, BuildCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Builds and returns the data saved in the database.
     * @param {BuildCreateManyAndReturnArgs} args - Arguments to create many Builds.
     * @example
     * // Create many Builds
     * const build = await prisma.build.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Builds and only return the `id`
     * const buildWithIdOnly = await prisma.build.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BuildCreateManyAndReturnArgs>(args?: SelectSubset<T, BuildCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BuildPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Build.
     * @param {BuildDeleteArgs} args - Arguments to delete one Build.
     * @example
     * // Delete one Build
     * const Build = await prisma.build.delete({
     *   where: {
     *     // ... filter to delete one Build
     *   }
     * })
     * 
     */
    delete<T extends BuildDeleteArgs>(args: SelectSubset<T, BuildDeleteArgs<ExtArgs>>): Prisma__BuildClient<$Result.GetResult<Prisma.$BuildPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Build.
     * @param {BuildUpdateArgs} args - Arguments to update one Build.
     * @example
     * // Update one Build
     * const build = await prisma.build.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BuildUpdateArgs>(args: SelectSubset<T, BuildUpdateArgs<ExtArgs>>): Prisma__BuildClient<$Result.GetResult<Prisma.$BuildPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Builds.
     * @param {BuildDeleteManyArgs} args - Arguments to filter Builds to delete.
     * @example
     * // Delete a few Builds
     * const { count } = await prisma.build.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BuildDeleteManyArgs>(args?: SelectSubset<T, BuildDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Builds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Builds
     * const build = await prisma.build.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BuildUpdateManyArgs>(args: SelectSubset<T, BuildUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Builds and returns the data updated in the database.
     * @param {BuildUpdateManyAndReturnArgs} args - Arguments to update many Builds.
     * @example
     * // Update many Builds
     * const build = await prisma.build.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Builds and only return the `id`
     * const buildWithIdOnly = await prisma.build.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BuildUpdateManyAndReturnArgs>(args: SelectSubset<T, BuildUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BuildPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Build.
     * @param {BuildUpsertArgs} args - Arguments to update or create a Build.
     * @example
     * // Update or create a Build
     * const build = await prisma.build.upsert({
     *   create: {
     *     // ... data to create a Build
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Build we want to update
     *   }
     * })
     */
    upsert<T extends BuildUpsertArgs>(args: SelectSubset<T, BuildUpsertArgs<ExtArgs>>): Prisma__BuildClient<$Result.GetResult<Prisma.$BuildPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Builds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildCountArgs} args - Arguments to filter Builds to count.
     * @example
     * // Count the number of Builds
     * const count = await prisma.build.count({
     *   where: {
     *     // ... the filter for the Builds we want to count
     *   }
     * })
    **/
    count<T extends BuildCountArgs>(
      args?: Subset<T, BuildCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BuildCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Build.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BuildAggregateArgs>(args: Subset<T, BuildAggregateArgs>): Prisma.PrismaPromise<GetBuildAggregateType<T>>

    /**
     * Group by Build.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BuildGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BuildGroupByArgs['orderBy'] }
        : { orderBy?: BuildGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BuildGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBuildGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Build model
   */
  readonly fields: BuildFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Build.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BuildClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    deployment<T extends DeploymentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DeploymentDefaultArgs<ExtArgs>>): Prisma__DeploymentClient<$Result.GetResult<Prisma.$DeploymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Build model
   */
  interface BuildFieldRefs {
    readonly id: FieldRef<"Build", 'String'>
    readonly deploymentId: FieldRef<"Build", 'String'>
    readonly status: FieldRef<"Build", 'BuildStatus'>
    readonly logs: FieldRef<"Build", 'String'>
    readonly createdAt: FieldRef<"Build", 'DateTime'>
    readonly updatedAt: FieldRef<"Build", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Build findUnique
   */
  export type BuildFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Build
     */
    select?: BuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Build
     */
    omit?: BuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildInclude<ExtArgs> | null
    /**
     * Filter, which Build to fetch.
     */
    where: BuildWhereUniqueInput
  }

  /**
   * Build findUniqueOrThrow
   */
  export type BuildFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Build
     */
    select?: BuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Build
     */
    omit?: BuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildInclude<ExtArgs> | null
    /**
     * Filter, which Build to fetch.
     */
    where: BuildWhereUniqueInput
  }

  /**
   * Build findFirst
   */
  export type BuildFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Build
     */
    select?: BuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Build
     */
    omit?: BuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildInclude<ExtArgs> | null
    /**
     * Filter, which Build to fetch.
     */
    where?: BuildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Builds to fetch.
     */
    orderBy?: BuildOrderByWithRelationInput | BuildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Builds.
     */
    cursor?: BuildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Builds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Builds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Builds.
     */
    distinct?: BuildScalarFieldEnum | BuildScalarFieldEnum[]
  }

  /**
   * Build findFirstOrThrow
   */
  export type BuildFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Build
     */
    select?: BuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Build
     */
    omit?: BuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildInclude<ExtArgs> | null
    /**
     * Filter, which Build to fetch.
     */
    where?: BuildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Builds to fetch.
     */
    orderBy?: BuildOrderByWithRelationInput | BuildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Builds.
     */
    cursor?: BuildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Builds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Builds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Builds.
     */
    distinct?: BuildScalarFieldEnum | BuildScalarFieldEnum[]
  }

  /**
   * Build findMany
   */
  export type BuildFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Build
     */
    select?: BuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Build
     */
    omit?: BuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildInclude<ExtArgs> | null
    /**
     * Filter, which Builds to fetch.
     */
    where?: BuildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Builds to fetch.
     */
    orderBy?: BuildOrderByWithRelationInput | BuildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Builds.
     */
    cursor?: BuildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Builds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Builds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Builds.
     */
    distinct?: BuildScalarFieldEnum | BuildScalarFieldEnum[]
  }

  /**
   * Build create
   */
  export type BuildCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Build
     */
    select?: BuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Build
     */
    omit?: BuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildInclude<ExtArgs> | null
    /**
     * The data needed to create a Build.
     */
    data: XOR<BuildCreateInput, BuildUncheckedCreateInput>
  }

  /**
   * Build createMany
   */
  export type BuildCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Builds.
     */
    data: BuildCreateManyInput | BuildCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Build createManyAndReturn
   */
  export type BuildCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Build
     */
    select?: BuildSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Build
     */
    omit?: BuildOmit<ExtArgs> | null
    /**
     * The data used to create many Builds.
     */
    data: BuildCreateManyInput | BuildCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Build update
   */
  export type BuildUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Build
     */
    select?: BuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Build
     */
    omit?: BuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildInclude<ExtArgs> | null
    /**
     * The data needed to update a Build.
     */
    data: XOR<BuildUpdateInput, BuildUncheckedUpdateInput>
    /**
     * Choose, which Build to update.
     */
    where: BuildWhereUniqueInput
  }

  /**
   * Build updateMany
   */
  export type BuildUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Builds.
     */
    data: XOR<BuildUpdateManyMutationInput, BuildUncheckedUpdateManyInput>
    /**
     * Filter which Builds to update
     */
    where?: BuildWhereInput
    /**
     * Limit how many Builds to update.
     */
    limit?: number
  }

  /**
   * Build updateManyAndReturn
   */
  export type BuildUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Build
     */
    select?: BuildSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Build
     */
    omit?: BuildOmit<ExtArgs> | null
    /**
     * The data used to update Builds.
     */
    data: XOR<BuildUpdateManyMutationInput, BuildUncheckedUpdateManyInput>
    /**
     * Filter which Builds to update
     */
    where?: BuildWhereInput
    /**
     * Limit how many Builds to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Build upsert
   */
  export type BuildUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Build
     */
    select?: BuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Build
     */
    omit?: BuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildInclude<ExtArgs> | null
    /**
     * The filter to search for the Build to update in case it exists.
     */
    where: BuildWhereUniqueInput
    /**
     * In case the Build found by the `where` argument doesn't exist, create a new Build with this data.
     */
    create: XOR<BuildCreateInput, BuildUncheckedCreateInput>
    /**
     * In case the Build was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BuildUpdateInput, BuildUncheckedUpdateInput>
  }

  /**
   * Build delete
   */
  export type BuildDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Build
     */
    select?: BuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Build
     */
    omit?: BuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildInclude<ExtArgs> | null
    /**
     * Filter which Build to delete.
     */
    where: BuildWhereUniqueInput
  }

  /**
   * Build deleteMany
   */
  export type BuildDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Builds to delete
     */
    where?: BuildWhereInput
    /**
     * Limit how many Builds to delete.
     */
    limit?: number
  }

  /**
   * Build without action
   */
  export type BuildDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Build
     */
    select?: BuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Build
     */
    omit?: BuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    repoUrl: 'repoUrl',
    repoFullName: 'repoFullName',
    repoId: 'repoId',
    defaultBranch: 'defaultBranch',
    framework: 'framework',
    deployedUrl: 'deployedUrl',
    webhookId: 'webhookId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const EnvironmentVariableScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    key: 'key',
    value: 'value',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EnvironmentVariableScalarFieldEnum = (typeof EnvironmentVariableScalarFieldEnum)[keyof typeof EnvironmentVariableScalarFieldEnum]


  export const DeploymentScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    status: 'status',
    branch: 'branch',
    commitSha: 'commitSha',
    commitMessage: 'commitMessage',
    deployedUrl: 'deployedUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DeploymentScalarFieldEnum = (typeof DeploymentScalarFieldEnum)[keyof typeof DeploymentScalarFieldEnum]


  export const BuildScalarFieldEnum: {
    id: 'id',
    deploymentId: 'deploymentId',
    status: 'status',
    logs: 'logs',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BuildScalarFieldEnum = (typeof BuildScalarFieldEnum)[keyof typeof BuildScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'Framework'
   */
  export type EnumFrameworkFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Framework'>
    


  /**
   * Reference to a field of type 'Framework[]'
   */
  export type ListEnumFrameworkFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Framework[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'DeploymentStatus'
   */
  export type EnumDeploymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeploymentStatus'>
    


  /**
   * Reference to a field of type 'DeploymentStatus[]'
   */
  export type ListEnumDeploymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeploymentStatus[]'>
    


  /**
   * Reference to a field of type 'BuildStatus'
   */
  export type EnumBuildStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BuildStatus'>
    


  /**
   * Reference to a field of type 'BuildStatus[]'
   */
  export type ListEnumBuildStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BuildStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    userId?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    repoUrl?: StringFilter<"Project"> | string
    repoFullName?: StringFilter<"Project"> | string
    repoId?: BigIntFilter<"Project"> | bigint | number
    defaultBranch?: StringFilter<"Project"> | string
    framework?: EnumFrameworkFilter<"Project"> | $Enums.Framework
    deployedUrl?: StringNullableFilter<"Project"> | string | null
    webhookId?: StringNullableFilter<"Project"> | string | null
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    deployments?: DeploymentListRelationFilter
    envVars?: EnvironmentVariableListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    repoUrl?: SortOrder
    repoFullName?: SortOrder
    repoId?: SortOrder
    defaultBranch?: SortOrder
    framework?: SortOrder
    deployedUrl?: SortOrderInput | SortOrder
    webhookId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deployments?: DeploymentOrderByRelationAggregateInput
    envVars?: EnvironmentVariableOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    userId?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    repoUrl?: StringFilter<"Project"> | string
    repoFullName?: StringFilter<"Project"> | string
    repoId?: BigIntFilter<"Project"> | bigint | number
    defaultBranch?: StringFilter<"Project"> | string
    framework?: EnumFrameworkFilter<"Project"> | $Enums.Framework
    deployedUrl?: StringNullableFilter<"Project"> | string | null
    webhookId?: StringNullableFilter<"Project"> | string | null
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    deployments?: DeploymentListRelationFilter
    envVars?: EnvironmentVariableListRelationFilter
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    repoUrl?: SortOrder
    repoFullName?: SortOrder
    repoId?: SortOrder
    defaultBranch?: SortOrder
    framework?: SortOrder
    deployedUrl?: SortOrderInput | SortOrder
    webhookId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _avg?: ProjectAvgOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
    _sum?: ProjectSumOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    userId?: StringWithAggregatesFilter<"Project"> | string
    name?: StringWithAggregatesFilter<"Project"> | string
    repoUrl?: StringWithAggregatesFilter<"Project"> | string
    repoFullName?: StringWithAggregatesFilter<"Project"> | string
    repoId?: BigIntWithAggregatesFilter<"Project"> | bigint | number
    defaultBranch?: StringWithAggregatesFilter<"Project"> | string
    framework?: EnumFrameworkWithAggregatesFilter<"Project"> | $Enums.Framework
    deployedUrl?: StringNullableWithAggregatesFilter<"Project"> | string | null
    webhookId?: StringNullableWithAggregatesFilter<"Project"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
  }

  export type EnvironmentVariableWhereInput = {
    AND?: EnvironmentVariableWhereInput | EnvironmentVariableWhereInput[]
    OR?: EnvironmentVariableWhereInput[]
    NOT?: EnvironmentVariableWhereInput | EnvironmentVariableWhereInput[]
    id?: StringFilter<"EnvironmentVariable"> | string
    projectId?: StringFilter<"EnvironmentVariable"> | string
    key?: StringFilter<"EnvironmentVariable"> | string
    value?: StringFilter<"EnvironmentVariable"> | string
    createdAt?: DateTimeFilter<"EnvironmentVariable"> | Date | string
    updatedAt?: DateTimeFilter<"EnvironmentVariable"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type EnvironmentVariableOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    key?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
  }

  export type EnvironmentVariableWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    projectId_key?: EnvironmentVariableProjectIdKeyCompoundUniqueInput
    AND?: EnvironmentVariableWhereInput | EnvironmentVariableWhereInput[]
    OR?: EnvironmentVariableWhereInput[]
    NOT?: EnvironmentVariableWhereInput | EnvironmentVariableWhereInput[]
    projectId?: StringFilter<"EnvironmentVariable"> | string
    key?: StringFilter<"EnvironmentVariable"> | string
    value?: StringFilter<"EnvironmentVariable"> | string
    createdAt?: DateTimeFilter<"EnvironmentVariable"> | Date | string
    updatedAt?: DateTimeFilter<"EnvironmentVariable"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "id" | "projectId_key">

  export type EnvironmentVariableOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    key?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EnvironmentVariableCountOrderByAggregateInput
    _max?: EnvironmentVariableMaxOrderByAggregateInput
    _min?: EnvironmentVariableMinOrderByAggregateInput
  }

  export type EnvironmentVariableScalarWhereWithAggregatesInput = {
    AND?: EnvironmentVariableScalarWhereWithAggregatesInput | EnvironmentVariableScalarWhereWithAggregatesInput[]
    OR?: EnvironmentVariableScalarWhereWithAggregatesInput[]
    NOT?: EnvironmentVariableScalarWhereWithAggregatesInput | EnvironmentVariableScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EnvironmentVariable"> | string
    projectId?: StringWithAggregatesFilter<"EnvironmentVariable"> | string
    key?: StringWithAggregatesFilter<"EnvironmentVariable"> | string
    value?: StringWithAggregatesFilter<"EnvironmentVariable"> | string
    createdAt?: DateTimeWithAggregatesFilter<"EnvironmentVariable"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EnvironmentVariable"> | Date | string
  }

  export type DeploymentWhereInput = {
    AND?: DeploymentWhereInput | DeploymentWhereInput[]
    OR?: DeploymentWhereInput[]
    NOT?: DeploymentWhereInput | DeploymentWhereInput[]
    id?: StringFilter<"Deployment"> | string
    projectId?: StringFilter<"Deployment"> | string
    status?: EnumDeploymentStatusFilter<"Deployment"> | $Enums.DeploymentStatus
    branch?: StringFilter<"Deployment"> | string
    commitSha?: StringNullableFilter<"Deployment"> | string | null
    commitMessage?: StringNullableFilter<"Deployment"> | string | null
    deployedUrl?: StringNullableFilter<"Deployment"> | string | null
    createdAt?: DateTimeFilter<"Deployment"> | Date | string
    updatedAt?: DateTimeFilter<"Deployment"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    builds?: BuildListRelationFilter
  }

  export type DeploymentOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    status?: SortOrder
    branch?: SortOrder
    commitSha?: SortOrderInput | SortOrder
    commitMessage?: SortOrderInput | SortOrder
    deployedUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
    builds?: BuildOrderByRelationAggregateInput
  }

  export type DeploymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DeploymentWhereInput | DeploymentWhereInput[]
    OR?: DeploymentWhereInput[]
    NOT?: DeploymentWhereInput | DeploymentWhereInput[]
    projectId?: StringFilter<"Deployment"> | string
    status?: EnumDeploymentStatusFilter<"Deployment"> | $Enums.DeploymentStatus
    branch?: StringFilter<"Deployment"> | string
    commitSha?: StringNullableFilter<"Deployment"> | string | null
    commitMessage?: StringNullableFilter<"Deployment"> | string | null
    deployedUrl?: StringNullableFilter<"Deployment"> | string | null
    createdAt?: DateTimeFilter<"Deployment"> | Date | string
    updatedAt?: DateTimeFilter<"Deployment"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    builds?: BuildListRelationFilter
  }, "id">

  export type DeploymentOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    status?: SortOrder
    branch?: SortOrder
    commitSha?: SortOrderInput | SortOrder
    commitMessage?: SortOrderInput | SortOrder
    deployedUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DeploymentCountOrderByAggregateInput
    _max?: DeploymentMaxOrderByAggregateInput
    _min?: DeploymentMinOrderByAggregateInput
  }

  export type DeploymentScalarWhereWithAggregatesInput = {
    AND?: DeploymentScalarWhereWithAggregatesInput | DeploymentScalarWhereWithAggregatesInput[]
    OR?: DeploymentScalarWhereWithAggregatesInput[]
    NOT?: DeploymentScalarWhereWithAggregatesInput | DeploymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Deployment"> | string
    projectId?: StringWithAggregatesFilter<"Deployment"> | string
    status?: EnumDeploymentStatusWithAggregatesFilter<"Deployment"> | $Enums.DeploymentStatus
    branch?: StringWithAggregatesFilter<"Deployment"> | string
    commitSha?: StringNullableWithAggregatesFilter<"Deployment"> | string | null
    commitMessage?: StringNullableWithAggregatesFilter<"Deployment"> | string | null
    deployedUrl?: StringNullableWithAggregatesFilter<"Deployment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Deployment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Deployment"> | Date | string
  }

  export type BuildWhereInput = {
    AND?: BuildWhereInput | BuildWhereInput[]
    OR?: BuildWhereInput[]
    NOT?: BuildWhereInput | BuildWhereInput[]
    id?: StringFilter<"Build"> | string
    deploymentId?: StringFilter<"Build"> | string
    status?: EnumBuildStatusFilter<"Build"> | $Enums.BuildStatus
    logs?: StringNullableFilter<"Build"> | string | null
    createdAt?: DateTimeFilter<"Build"> | Date | string
    updatedAt?: DateTimeFilter<"Build"> | Date | string
    deployment?: XOR<DeploymentScalarRelationFilter, DeploymentWhereInput>
  }

  export type BuildOrderByWithRelationInput = {
    id?: SortOrder
    deploymentId?: SortOrder
    status?: SortOrder
    logs?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deployment?: DeploymentOrderByWithRelationInput
  }

  export type BuildWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BuildWhereInput | BuildWhereInput[]
    OR?: BuildWhereInput[]
    NOT?: BuildWhereInput | BuildWhereInput[]
    deploymentId?: StringFilter<"Build"> | string
    status?: EnumBuildStatusFilter<"Build"> | $Enums.BuildStatus
    logs?: StringNullableFilter<"Build"> | string | null
    createdAt?: DateTimeFilter<"Build"> | Date | string
    updatedAt?: DateTimeFilter<"Build"> | Date | string
    deployment?: XOR<DeploymentScalarRelationFilter, DeploymentWhereInput>
  }, "id">

  export type BuildOrderByWithAggregationInput = {
    id?: SortOrder
    deploymentId?: SortOrder
    status?: SortOrder
    logs?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BuildCountOrderByAggregateInput
    _max?: BuildMaxOrderByAggregateInput
    _min?: BuildMinOrderByAggregateInput
  }

  export type BuildScalarWhereWithAggregatesInput = {
    AND?: BuildScalarWhereWithAggregatesInput | BuildScalarWhereWithAggregatesInput[]
    OR?: BuildScalarWhereWithAggregatesInput[]
    NOT?: BuildScalarWhereWithAggregatesInput | BuildScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Build"> | string
    deploymentId?: StringWithAggregatesFilter<"Build"> | string
    status?: EnumBuildStatusWithAggregatesFilter<"Build"> | $Enums.BuildStatus
    logs?: StringNullableWithAggregatesFilter<"Build"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Build"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Build"> | Date | string
  }

  export type ProjectCreateInput = {
    id?: string
    userId: string
    name: string
    repoUrl: string
    repoFullName: string
    repoId: bigint | number
    defaultBranch?: string
    framework?: $Enums.Framework
    deployedUrl?: string | null
    webhookId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deployments?: DeploymentCreateNestedManyWithoutProjectInput
    envVars?: EnvironmentVariableCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    repoUrl: string
    repoFullName: string
    repoId: bigint | number
    defaultBranch?: string
    framework?: $Enums.Framework
    deployedUrl?: string | null
    webhookId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deployments?: DeploymentUncheckedCreateNestedManyWithoutProjectInput
    envVars?: EnvironmentVariableUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    repoUrl?: StringFieldUpdateOperationsInput | string
    repoFullName?: StringFieldUpdateOperationsInput | string
    repoId?: BigIntFieldUpdateOperationsInput | bigint | number
    defaultBranch?: StringFieldUpdateOperationsInput | string
    framework?: EnumFrameworkFieldUpdateOperationsInput | $Enums.Framework
    deployedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    webhookId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deployments?: DeploymentUpdateManyWithoutProjectNestedInput
    envVars?: EnvironmentVariableUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    repoUrl?: StringFieldUpdateOperationsInput | string
    repoFullName?: StringFieldUpdateOperationsInput | string
    repoId?: BigIntFieldUpdateOperationsInput | bigint | number
    defaultBranch?: StringFieldUpdateOperationsInput | string
    framework?: EnumFrameworkFieldUpdateOperationsInput | $Enums.Framework
    deployedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    webhookId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deployments?: DeploymentUncheckedUpdateManyWithoutProjectNestedInput
    envVars?: EnvironmentVariableUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: string
    userId: string
    name: string
    repoUrl: string
    repoFullName: string
    repoId: bigint | number
    defaultBranch?: string
    framework?: $Enums.Framework
    deployedUrl?: string | null
    webhookId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    repoUrl?: StringFieldUpdateOperationsInput | string
    repoFullName?: StringFieldUpdateOperationsInput | string
    repoId?: BigIntFieldUpdateOperationsInput | bigint | number
    defaultBranch?: StringFieldUpdateOperationsInput | string
    framework?: EnumFrameworkFieldUpdateOperationsInput | $Enums.Framework
    deployedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    webhookId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    repoUrl?: StringFieldUpdateOperationsInput | string
    repoFullName?: StringFieldUpdateOperationsInput | string
    repoId?: BigIntFieldUpdateOperationsInput | bigint | number
    defaultBranch?: StringFieldUpdateOperationsInput | string
    framework?: EnumFrameworkFieldUpdateOperationsInput | $Enums.Framework
    deployedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    webhookId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnvironmentVariableCreateInput = {
    id?: string
    key: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutEnvVarsInput
  }

  export type EnvironmentVariableUncheckedCreateInput = {
    id?: string
    projectId: string
    key: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EnvironmentVariableUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutEnvVarsNestedInput
  }

  export type EnvironmentVariableUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnvironmentVariableCreateManyInput = {
    id?: string
    projectId: string
    key: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EnvironmentVariableUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnvironmentVariableUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeploymentCreateInput = {
    id?: string
    status?: $Enums.DeploymentStatus
    branch?: string
    commitSha?: string | null
    commitMessage?: string | null
    deployedUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutDeploymentsInput
    builds?: BuildCreateNestedManyWithoutDeploymentInput
  }

  export type DeploymentUncheckedCreateInput = {
    id?: string
    projectId: string
    status?: $Enums.DeploymentStatus
    branch?: string
    commitSha?: string | null
    commitMessage?: string | null
    deployedUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    builds?: BuildUncheckedCreateNestedManyWithoutDeploymentInput
  }

  export type DeploymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumDeploymentStatusFieldUpdateOperationsInput | $Enums.DeploymentStatus
    branch?: StringFieldUpdateOperationsInput | string
    commitSha?: NullableStringFieldUpdateOperationsInput | string | null
    commitMessage?: NullableStringFieldUpdateOperationsInput | string | null
    deployedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutDeploymentsNestedInput
    builds?: BuildUpdateManyWithoutDeploymentNestedInput
  }

  export type DeploymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    status?: EnumDeploymentStatusFieldUpdateOperationsInput | $Enums.DeploymentStatus
    branch?: StringFieldUpdateOperationsInput | string
    commitSha?: NullableStringFieldUpdateOperationsInput | string | null
    commitMessage?: NullableStringFieldUpdateOperationsInput | string | null
    deployedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    builds?: BuildUncheckedUpdateManyWithoutDeploymentNestedInput
  }

  export type DeploymentCreateManyInput = {
    id?: string
    projectId: string
    status?: $Enums.DeploymentStatus
    branch?: string
    commitSha?: string | null
    commitMessage?: string | null
    deployedUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeploymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumDeploymentStatusFieldUpdateOperationsInput | $Enums.DeploymentStatus
    branch?: StringFieldUpdateOperationsInput | string
    commitSha?: NullableStringFieldUpdateOperationsInput | string | null
    commitMessage?: NullableStringFieldUpdateOperationsInput | string | null
    deployedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeploymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    status?: EnumDeploymentStatusFieldUpdateOperationsInput | $Enums.DeploymentStatus
    branch?: StringFieldUpdateOperationsInput | string
    commitSha?: NullableStringFieldUpdateOperationsInput | string | null
    commitMessage?: NullableStringFieldUpdateOperationsInput | string | null
    deployedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BuildCreateInput = {
    id?: string
    status?: $Enums.BuildStatus
    logs?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deployment: DeploymentCreateNestedOneWithoutBuildsInput
  }

  export type BuildUncheckedCreateInput = {
    id?: string
    deploymentId: string
    status?: $Enums.BuildStatus
    logs?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BuildUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumBuildStatusFieldUpdateOperationsInput | $Enums.BuildStatus
    logs?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deployment?: DeploymentUpdateOneRequiredWithoutBuildsNestedInput
  }

  export type BuildUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    deploymentId?: StringFieldUpdateOperationsInput | string
    status?: EnumBuildStatusFieldUpdateOperationsInput | $Enums.BuildStatus
    logs?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BuildCreateManyInput = {
    id?: string
    deploymentId: string
    status?: $Enums.BuildStatus
    logs?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BuildUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumBuildStatusFieldUpdateOperationsInput | $Enums.BuildStatus
    logs?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BuildUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    deploymentId?: StringFieldUpdateOperationsInput | string
    status?: EnumBuildStatusFieldUpdateOperationsInput | $Enums.BuildStatus
    logs?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type EnumFrameworkFilter<$PrismaModel = never> = {
    equals?: $Enums.Framework | EnumFrameworkFieldRefInput<$PrismaModel>
    in?: $Enums.Framework[] | ListEnumFrameworkFieldRefInput<$PrismaModel>
    notIn?: $Enums.Framework[] | ListEnumFrameworkFieldRefInput<$PrismaModel>
    not?: NestedEnumFrameworkFilter<$PrismaModel> | $Enums.Framework
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DeploymentListRelationFilter = {
    every?: DeploymentWhereInput
    some?: DeploymentWhereInput
    none?: DeploymentWhereInput
  }

  export type EnvironmentVariableListRelationFilter = {
    every?: EnvironmentVariableWhereInput
    some?: EnvironmentVariableWhereInput
    none?: EnvironmentVariableWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DeploymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EnvironmentVariableOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    repoUrl?: SortOrder
    repoFullName?: SortOrder
    repoId?: SortOrder
    defaultBranch?: SortOrder
    framework?: SortOrder
    deployedUrl?: SortOrder
    webhookId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectAvgOrderByAggregateInput = {
    repoId?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    repoUrl?: SortOrder
    repoFullName?: SortOrder
    repoId?: SortOrder
    defaultBranch?: SortOrder
    framework?: SortOrder
    deployedUrl?: SortOrder
    webhookId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    repoUrl?: SortOrder
    repoFullName?: SortOrder
    repoId?: SortOrder
    defaultBranch?: SortOrder
    framework?: SortOrder
    deployedUrl?: SortOrder
    webhookId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectSumOrderByAggregateInput = {
    repoId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type EnumFrameworkWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Framework | EnumFrameworkFieldRefInput<$PrismaModel>
    in?: $Enums.Framework[] | ListEnumFrameworkFieldRefInput<$PrismaModel>
    notIn?: $Enums.Framework[] | ListEnumFrameworkFieldRefInput<$PrismaModel>
    not?: NestedEnumFrameworkWithAggregatesFilter<$PrismaModel> | $Enums.Framework
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFrameworkFilter<$PrismaModel>
    _max?: NestedEnumFrameworkFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ProjectScalarRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type EnvironmentVariableProjectIdKeyCompoundUniqueInput = {
    projectId: string
    key: string
  }

  export type EnvironmentVariableCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    key?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnvironmentVariableMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    key?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnvironmentVariableMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    key?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumDeploymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DeploymentStatus | EnumDeploymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DeploymentStatus[] | ListEnumDeploymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeploymentStatus[] | ListEnumDeploymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDeploymentStatusFilter<$PrismaModel> | $Enums.DeploymentStatus
  }

  export type BuildListRelationFilter = {
    every?: BuildWhereInput
    some?: BuildWhereInput
    none?: BuildWhereInput
  }

  export type BuildOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DeploymentCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    status?: SortOrder
    branch?: SortOrder
    commitSha?: SortOrder
    commitMessage?: SortOrder
    deployedUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeploymentMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    status?: SortOrder
    branch?: SortOrder
    commitSha?: SortOrder
    commitMessage?: SortOrder
    deployedUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DeploymentMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    status?: SortOrder
    branch?: SortOrder
    commitSha?: SortOrder
    commitMessage?: SortOrder
    deployedUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumDeploymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeploymentStatus | EnumDeploymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DeploymentStatus[] | ListEnumDeploymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeploymentStatus[] | ListEnumDeploymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDeploymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.DeploymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDeploymentStatusFilter<$PrismaModel>
    _max?: NestedEnumDeploymentStatusFilter<$PrismaModel>
  }

  export type EnumBuildStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BuildStatus | EnumBuildStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BuildStatus[] | ListEnumBuildStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BuildStatus[] | ListEnumBuildStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBuildStatusFilter<$PrismaModel> | $Enums.BuildStatus
  }

  export type DeploymentScalarRelationFilter = {
    is?: DeploymentWhereInput
    isNot?: DeploymentWhereInput
  }

  export type BuildCountOrderByAggregateInput = {
    id?: SortOrder
    deploymentId?: SortOrder
    status?: SortOrder
    logs?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BuildMaxOrderByAggregateInput = {
    id?: SortOrder
    deploymentId?: SortOrder
    status?: SortOrder
    logs?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BuildMinOrderByAggregateInput = {
    id?: SortOrder
    deploymentId?: SortOrder
    status?: SortOrder
    logs?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumBuildStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BuildStatus | EnumBuildStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BuildStatus[] | ListEnumBuildStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BuildStatus[] | ListEnumBuildStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBuildStatusWithAggregatesFilter<$PrismaModel> | $Enums.BuildStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBuildStatusFilter<$PrismaModel>
    _max?: NestedEnumBuildStatusFilter<$PrismaModel>
  }

  export type DeploymentCreateNestedManyWithoutProjectInput = {
    create?: XOR<DeploymentCreateWithoutProjectInput, DeploymentUncheckedCreateWithoutProjectInput> | DeploymentCreateWithoutProjectInput[] | DeploymentUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: DeploymentCreateOrConnectWithoutProjectInput | DeploymentCreateOrConnectWithoutProjectInput[]
    createMany?: DeploymentCreateManyProjectInputEnvelope
    connect?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
  }

  export type EnvironmentVariableCreateNestedManyWithoutProjectInput = {
    create?: XOR<EnvironmentVariableCreateWithoutProjectInput, EnvironmentVariableUncheckedCreateWithoutProjectInput> | EnvironmentVariableCreateWithoutProjectInput[] | EnvironmentVariableUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: EnvironmentVariableCreateOrConnectWithoutProjectInput | EnvironmentVariableCreateOrConnectWithoutProjectInput[]
    createMany?: EnvironmentVariableCreateManyProjectInputEnvelope
    connect?: EnvironmentVariableWhereUniqueInput | EnvironmentVariableWhereUniqueInput[]
  }

  export type DeploymentUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<DeploymentCreateWithoutProjectInput, DeploymentUncheckedCreateWithoutProjectInput> | DeploymentCreateWithoutProjectInput[] | DeploymentUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: DeploymentCreateOrConnectWithoutProjectInput | DeploymentCreateOrConnectWithoutProjectInput[]
    createMany?: DeploymentCreateManyProjectInputEnvelope
    connect?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
  }

  export type EnvironmentVariableUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<EnvironmentVariableCreateWithoutProjectInput, EnvironmentVariableUncheckedCreateWithoutProjectInput> | EnvironmentVariableCreateWithoutProjectInput[] | EnvironmentVariableUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: EnvironmentVariableCreateOrConnectWithoutProjectInput | EnvironmentVariableCreateOrConnectWithoutProjectInput[]
    createMany?: EnvironmentVariableCreateManyProjectInputEnvelope
    connect?: EnvironmentVariableWhereUniqueInput | EnvironmentVariableWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type EnumFrameworkFieldUpdateOperationsInput = {
    set?: $Enums.Framework
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DeploymentUpdateManyWithoutProjectNestedInput = {
    create?: XOR<DeploymentCreateWithoutProjectInput, DeploymentUncheckedCreateWithoutProjectInput> | DeploymentCreateWithoutProjectInput[] | DeploymentUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: DeploymentCreateOrConnectWithoutProjectInput | DeploymentCreateOrConnectWithoutProjectInput[]
    upsert?: DeploymentUpsertWithWhereUniqueWithoutProjectInput | DeploymentUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: DeploymentCreateManyProjectInputEnvelope
    set?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
    disconnect?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
    delete?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
    connect?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
    update?: DeploymentUpdateWithWhereUniqueWithoutProjectInput | DeploymentUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: DeploymentUpdateManyWithWhereWithoutProjectInput | DeploymentUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: DeploymentScalarWhereInput | DeploymentScalarWhereInput[]
  }

  export type EnvironmentVariableUpdateManyWithoutProjectNestedInput = {
    create?: XOR<EnvironmentVariableCreateWithoutProjectInput, EnvironmentVariableUncheckedCreateWithoutProjectInput> | EnvironmentVariableCreateWithoutProjectInput[] | EnvironmentVariableUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: EnvironmentVariableCreateOrConnectWithoutProjectInput | EnvironmentVariableCreateOrConnectWithoutProjectInput[]
    upsert?: EnvironmentVariableUpsertWithWhereUniqueWithoutProjectInput | EnvironmentVariableUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: EnvironmentVariableCreateManyProjectInputEnvelope
    set?: EnvironmentVariableWhereUniqueInput | EnvironmentVariableWhereUniqueInput[]
    disconnect?: EnvironmentVariableWhereUniqueInput | EnvironmentVariableWhereUniqueInput[]
    delete?: EnvironmentVariableWhereUniqueInput | EnvironmentVariableWhereUniqueInput[]
    connect?: EnvironmentVariableWhereUniqueInput | EnvironmentVariableWhereUniqueInput[]
    update?: EnvironmentVariableUpdateWithWhereUniqueWithoutProjectInput | EnvironmentVariableUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: EnvironmentVariableUpdateManyWithWhereWithoutProjectInput | EnvironmentVariableUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: EnvironmentVariableScalarWhereInput | EnvironmentVariableScalarWhereInput[]
  }

  export type DeploymentUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<DeploymentCreateWithoutProjectInput, DeploymentUncheckedCreateWithoutProjectInput> | DeploymentCreateWithoutProjectInput[] | DeploymentUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: DeploymentCreateOrConnectWithoutProjectInput | DeploymentCreateOrConnectWithoutProjectInput[]
    upsert?: DeploymentUpsertWithWhereUniqueWithoutProjectInput | DeploymentUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: DeploymentCreateManyProjectInputEnvelope
    set?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
    disconnect?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
    delete?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
    connect?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
    update?: DeploymentUpdateWithWhereUniqueWithoutProjectInput | DeploymentUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: DeploymentUpdateManyWithWhereWithoutProjectInput | DeploymentUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: DeploymentScalarWhereInput | DeploymentScalarWhereInput[]
  }

  export type EnvironmentVariableUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<EnvironmentVariableCreateWithoutProjectInput, EnvironmentVariableUncheckedCreateWithoutProjectInput> | EnvironmentVariableCreateWithoutProjectInput[] | EnvironmentVariableUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: EnvironmentVariableCreateOrConnectWithoutProjectInput | EnvironmentVariableCreateOrConnectWithoutProjectInput[]
    upsert?: EnvironmentVariableUpsertWithWhereUniqueWithoutProjectInput | EnvironmentVariableUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: EnvironmentVariableCreateManyProjectInputEnvelope
    set?: EnvironmentVariableWhereUniqueInput | EnvironmentVariableWhereUniqueInput[]
    disconnect?: EnvironmentVariableWhereUniqueInput | EnvironmentVariableWhereUniqueInput[]
    delete?: EnvironmentVariableWhereUniqueInput | EnvironmentVariableWhereUniqueInput[]
    connect?: EnvironmentVariableWhereUniqueInput | EnvironmentVariableWhereUniqueInput[]
    update?: EnvironmentVariableUpdateWithWhereUniqueWithoutProjectInput | EnvironmentVariableUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: EnvironmentVariableUpdateManyWithWhereWithoutProjectInput | EnvironmentVariableUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: EnvironmentVariableScalarWhereInput | EnvironmentVariableScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutEnvVarsInput = {
    create?: XOR<ProjectCreateWithoutEnvVarsInput, ProjectUncheckedCreateWithoutEnvVarsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutEnvVarsInput
    connect?: ProjectWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutEnvVarsNestedInput = {
    create?: XOR<ProjectCreateWithoutEnvVarsInput, ProjectUncheckedCreateWithoutEnvVarsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutEnvVarsInput
    upsert?: ProjectUpsertWithoutEnvVarsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutEnvVarsInput, ProjectUpdateWithoutEnvVarsInput>, ProjectUncheckedUpdateWithoutEnvVarsInput>
  }

  export type ProjectCreateNestedOneWithoutDeploymentsInput = {
    create?: XOR<ProjectCreateWithoutDeploymentsInput, ProjectUncheckedCreateWithoutDeploymentsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutDeploymentsInput
    connect?: ProjectWhereUniqueInput
  }

  export type BuildCreateNestedManyWithoutDeploymentInput = {
    create?: XOR<BuildCreateWithoutDeploymentInput, BuildUncheckedCreateWithoutDeploymentInput> | BuildCreateWithoutDeploymentInput[] | BuildUncheckedCreateWithoutDeploymentInput[]
    connectOrCreate?: BuildCreateOrConnectWithoutDeploymentInput | BuildCreateOrConnectWithoutDeploymentInput[]
    createMany?: BuildCreateManyDeploymentInputEnvelope
    connect?: BuildWhereUniqueInput | BuildWhereUniqueInput[]
  }

  export type BuildUncheckedCreateNestedManyWithoutDeploymentInput = {
    create?: XOR<BuildCreateWithoutDeploymentInput, BuildUncheckedCreateWithoutDeploymentInput> | BuildCreateWithoutDeploymentInput[] | BuildUncheckedCreateWithoutDeploymentInput[]
    connectOrCreate?: BuildCreateOrConnectWithoutDeploymentInput | BuildCreateOrConnectWithoutDeploymentInput[]
    createMany?: BuildCreateManyDeploymentInputEnvelope
    connect?: BuildWhereUniqueInput | BuildWhereUniqueInput[]
  }

  export type EnumDeploymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.DeploymentStatus
  }

  export type ProjectUpdateOneRequiredWithoutDeploymentsNestedInput = {
    create?: XOR<ProjectCreateWithoutDeploymentsInput, ProjectUncheckedCreateWithoutDeploymentsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutDeploymentsInput
    upsert?: ProjectUpsertWithoutDeploymentsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutDeploymentsInput, ProjectUpdateWithoutDeploymentsInput>, ProjectUncheckedUpdateWithoutDeploymentsInput>
  }

  export type BuildUpdateManyWithoutDeploymentNestedInput = {
    create?: XOR<BuildCreateWithoutDeploymentInput, BuildUncheckedCreateWithoutDeploymentInput> | BuildCreateWithoutDeploymentInput[] | BuildUncheckedCreateWithoutDeploymentInput[]
    connectOrCreate?: BuildCreateOrConnectWithoutDeploymentInput | BuildCreateOrConnectWithoutDeploymentInput[]
    upsert?: BuildUpsertWithWhereUniqueWithoutDeploymentInput | BuildUpsertWithWhereUniqueWithoutDeploymentInput[]
    createMany?: BuildCreateManyDeploymentInputEnvelope
    set?: BuildWhereUniqueInput | BuildWhereUniqueInput[]
    disconnect?: BuildWhereUniqueInput | BuildWhereUniqueInput[]
    delete?: BuildWhereUniqueInput | BuildWhereUniqueInput[]
    connect?: BuildWhereUniqueInput | BuildWhereUniqueInput[]
    update?: BuildUpdateWithWhereUniqueWithoutDeploymentInput | BuildUpdateWithWhereUniqueWithoutDeploymentInput[]
    updateMany?: BuildUpdateManyWithWhereWithoutDeploymentInput | BuildUpdateManyWithWhereWithoutDeploymentInput[]
    deleteMany?: BuildScalarWhereInput | BuildScalarWhereInput[]
  }

  export type BuildUncheckedUpdateManyWithoutDeploymentNestedInput = {
    create?: XOR<BuildCreateWithoutDeploymentInput, BuildUncheckedCreateWithoutDeploymentInput> | BuildCreateWithoutDeploymentInput[] | BuildUncheckedCreateWithoutDeploymentInput[]
    connectOrCreate?: BuildCreateOrConnectWithoutDeploymentInput | BuildCreateOrConnectWithoutDeploymentInput[]
    upsert?: BuildUpsertWithWhereUniqueWithoutDeploymentInput | BuildUpsertWithWhereUniqueWithoutDeploymentInput[]
    createMany?: BuildCreateManyDeploymentInputEnvelope
    set?: BuildWhereUniqueInput | BuildWhereUniqueInput[]
    disconnect?: BuildWhereUniqueInput | BuildWhereUniqueInput[]
    delete?: BuildWhereUniqueInput | BuildWhereUniqueInput[]
    connect?: BuildWhereUniqueInput | BuildWhereUniqueInput[]
    update?: BuildUpdateWithWhereUniqueWithoutDeploymentInput | BuildUpdateWithWhereUniqueWithoutDeploymentInput[]
    updateMany?: BuildUpdateManyWithWhereWithoutDeploymentInput | BuildUpdateManyWithWhereWithoutDeploymentInput[]
    deleteMany?: BuildScalarWhereInput | BuildScalarWhereInput[]
  }

  export type DeploymentCreateNestedOneWithoutBuildsInput = {
    create?: XOR<DeploymentCreateWithoutBuildsInput, DeploymentUncheckedCreateWithoutBuildsInput>
    connectOrCreate?: DeploymentCreateOrConnectWithoutBuildsInput
    connect?: DeploymentWhereUniqueInput
  }

  export type EnumBuildStatusFieldUpdateOperationsInput = {
    set?: $Enums.BuildStatus
  }

  export type DeploymentUpdateOneRequiredWithoutBuildsNestedInput = {
    create?: XOR<DeploymentCreateWithoutBuildsInput, DeploymentUncheckedCreateWithoutBuildsInput>
    connectOrCreate?: DeploymentCreateOrConnectWithoutBuildsInput
    upsert?: DeploymentUpsertWithoutBuildsInput
    connect?: DeploymentWhereUniqueInput
    update?: XOR<XOR<DeploymentUpdateToOneWithWhereWithoutBuildsInput, DeploymentUpdateWithoutBuildsInput>, DeploymentUncheckedUpdateWithoutBuildsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedEnumFrameworkFilter<$PrismaModel = never> = {
    equals?: $Enums.Framework | EnumFrameworkFieldRefInput<$PrismaModel>
    in?: $Enums.Framework[] | ListEnumFrameworkFieldRefInput<$PrismaModel>
    notIn?: $Enums.Framework[] | ListEnumFrameworkFieldRefInput<$PrismaModel>
    not?: NestedEnumFrameworkFilter<$PrismaModel> | $Enums.Framework
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumFrameworkWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Framework | EnumFrameworkFieldRefInput<$PrismaModel>
    in?: $Enums.Framework[] | ListEnumFrameworkFieldRefInput<$PrismaModel>
    notIn?: $Enums.Framework[] | ListEnumFrameworkFieldRefInput<$PrismaModel>
    not?: NestedEnumFrameworkWithAggregatesFilter<$PrismaModel> | $Enums.Framework
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFrameworkFilter<$PrismaModel>
    _max?: NestedEnumFrameworkFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumDeploymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DeploymentStatus | EnumDeploymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DeploymentStatus[] | ListEnumDeploymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeploymentStatus[] | ListEnumDeploymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDeploymentStatusFilter<$PrismaModel> | $Enums.DeploymentStatus
  }

  export type NestedEnumDeploymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeploymentStatus | EnumDeploymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DeploymentStatus[] | ListEnumDeploymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeploymentStatus[] | ListEnumDeploymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDeploymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.DeploymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDeploymentStatusFilter<$PrismaModel>
    _max?: NestedEnumDeploymentStatusFilter<$PrismaModel>
  }

  export type NestedEnumBuildStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BuildStatus | EnumBuildStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BuildStatus[] | ListEnumBuildStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BuildStatus[] | ListEnumBuildStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBuildStatusFilter<$PrismaModel> | $Enums.BuildStatus
  }

  export type NestedEnumBuildStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BuildStatus | EnumBuildStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BuildStatus[] | ListEnumBuildStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BuildStatus[] | ListEnumBuildStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBuildStatusWithAggregatesFilter<$PrismaModel> | $Enums.BuildStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBuildStatusFilter<$PrismaModel>
    _max?: NestedEnumBuildStatusFilter<$PrismaModel>
  }

  export type DeploymentCreateWithoutProjectInput = {
    id?: string
    status?: $Enums.DeploymentStatus
    branch?: string
    commitSha?: string | null
    commitMessage?: string | null
    deployedUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    builds?: BuildCreateNestedManyWithoutDeploymentInput
  }

  export type DeploymentUncheckedCreateWithoutProjectInput = {
    id?: string
    status?: $Enums.DeploymentStatus
    branch?: string
    commitSha?: string | null
    commitMessage?: string | null
    deployedUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    builds?: BuildUncheckedCreateNestedManyWithoutDeploymentInput
  }

  export type DeploymentCreateOrConnectWithoutProjectInput = {
    where: DeploymentWhereUniqueInput
    create: XOR<DeploymentCreateWithoutProjectInput, DeploymentUncheckedCreateWithoutProjectInput>
  }

  export type DeploymentCreateManyProjectInputEnvelope = {
    data: DeploymentCreateManyProjectInput | DeploymentCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type EnvironmentVariableCreateWithoutProjectInput = {
    id?: string
    key: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EnvironmentVariableUncheckedCreateWithoutProjectInput = {
    id?: string
    key: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EnvironmentVariableCreateOrConnectWithoutProjectInput = {
    where: EnvironmentVariableWhereUniqueInput
    create: XOR<EnvironmentVariableCreateWithoutProjectInput, EnvironmentVariableUncheckedCreateWithoutProjectInput>
  }

  export type EnvironmentVariableCreateManyProjectInputEnvelope = {
    data: EnvironmentVariableCreateManyProjectInput | EnvironmentVariableCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type DeploymentUpsertWithWhereUniqueWithoutProjectInput = {
    where: DeploymentWhereUniqueInput
    update: XOR<DeploymentUpdateWithoutProjectInput, DeploymentUncheckedUpdateWithoutProjectInput>
    create: XOR<DeploymentCreateWithoutProjectInput, DeploymentUncheckedCreateWithoutProjectInput>
  }

  export type DeploymentUpdateWithWhereUniqueWithoutProjectInput = {
    where: DeploymentWhereUniqueInput
    data: XOR<DeploymentUpdateWithoutProjectInput, DeploymentUncheckedUpdateWithoutProjectInput>
  }

  export type DeploymentUpdateManyWithWhereWithoutProjectInput = {
    where: DeploymentScalarWhereInput
    data: XOR<DeploymentUpdateManyMutationInput, DeploymentUncheckedUpdateManyWithoutProjectInput>
  }

  export type DeploymentScalarWhereInput = {
    AND?: DeploymentScalarWhereInput | DeploymentScalarWhereInput[]
    OR?: DeploymentScalarWhereInput[]
    NOT?: DeploymentScalarWhereInput | DeploymentScalarWhereInput[]
    id?: StringFilter<"Deployment"> | string
    projectId?: StringFilter<"Deployment"> | string
    status?: EnumDeploymentStatusFilter<"Deployment"> | $Enums.DeploymentStatus
    branch?: StringFilter<"Deployment"> | string
    commitSha?: StringNullableFilter<"Deployment"> | string | null
    commitMessage?: StringNullableFilter<"Deployment"> | string | null
    deployedUrl?: StringNullableFilter<"Deployment"> | string | null
    createdAt?: DateTimeFilter<"Deployment"> | Date | string
    updatedAt?: DateTimeFilter<"Deployment"> | Date | string
  }

  export type EnvironmentVariableUpsertWithWhereUniqueWithoutProjectInput = {
    where: EnvironmentVariableWhereUniqueInput
    update: XOR<EnvironmentVariableUpdateWithoutProjectInput, EnvironmentVariableUncheckedUpdateWithoutProjectInput>
    create: XOR<EnvironmentVariableCreateWithoutProjectInput, EnvironmentVariableUncheckedCreateWithoutProjectInput>
  }

  export type EnvironmentVariableUpdateWithWhereUniqueWithoutProjectInput = {
    where: EnvironmentVariableWhereUniqueInput
    data: XOR<EnvironmentVariableUpdateWithoutProjectInput, EnvironmentVariableUncheckedUpdateWithoutProjectInput>
  }

  export type EnvironmentVariableUpdateManyWithWhereWithoutProjectInput = {
    where: EnvironmentVariableScalarWhereInput
    data: XOR<EnvironmentVariableUpdateManyMutationInput, EnvironmentVariableUncheckedUpdateManyWithoutProjectInput>
  }

  export type EnvironmentVariableScalarWhereInput = {
    AND?: EnvironmentVariableScalarWhereInput | EnvironmentVariableScalarWhereInput[]
    OR?: EnvironmentVariableScalarWhereInput[]
    NOT?: EnvironmentVariableScalarWhereInput | EnvironmentVariableScalarWhereInput[]
    id?: StringFilter<"EnvironmentVariable"> | string
    projectId?: StringFilter<"EnvironmentVariable"> | string
    key?: StringFilter<"EnvironmentVariable"> | string
    value?: StringFilter<"EnvironmentVariable"> | string
    createdAt?: DateTimeFilter<"EnvironmentVariable"> | Date | string
    updatedAt?: DateTimeFilter<"EnvironmentVariable"> | Date | string
  }

  export type ProjectCreateWithoutEnvVarsInput = {
    id?: string
    userId: string
    name: string
    repoUrl: string
    repoFullName: string
    repoId: bigint | number
    defaultBranch?: string
    framework?: $Enums.Framework
    deployedUrl?: string | null
    webhookId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deployments?: DeploymentCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutEnvVarsInput = {
    id?: string
    userId: string
    name: string
    repoUrl: string
    repoFullName: string
    repoId: bigint | number
    defaultBranch?: string
    framework?: $Enums.Framework
    deployedUrl?: string | null
    webhookId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deployments?: DeploymentUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutEnvVarsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutEnvVarsInput, ProjectUncheckedCreateWithoutEnvVarsInput>
  }

  export type ProjectUpsertWithoutEnvVarsInput = {
    update: XOR<ProjectUpdateWithoutEnvVarsInput, ProjectUncheckedUpdateWithoutEnvVarsInput>
    create: XOR<ProjectCreateWithoutEnvVarsInput, ProjectUncheckedCreateWithoutEnvVarsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutEnvVarsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutEnvVarsInput, ProjectUncheckedUpdateWithoutEnvVarsInput>
  }

  export type ProjectUpdateWithoutEnvVarsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    repoUrl?: StringFieldUpdateOperationsInput | string
    repoFullName?: StringFieldUpdateOperationsInput | string
    repoId?: BigIntFieldUpdateOperationsInput | bigint | number
    defaultBranch?: StringFieldUpdateOperationsInput | string
    framework?: EnumFrameworkFieldUpdateOperationsInput | $Enums.Framework
    deployedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    webhookId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deployments?: DeploymentUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutEnvVarsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    repoUrl?: StringFieldUpdateOperationsInput | string
    repoFullName?: StringFieldUpdateOperationsInput | string
    repoId?: BigIntFieldUpdateOperationsInput | bigint | number
    defaultBranch?: StringFieldUpdateOperationsInput | string
    framework?: EnumFrameworkFieldUpdateOperationsInput | $Enums.Framework
    deployedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    webhookId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deployments?: DeploymentUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateWithoutDeploymentsInput = {
    id?: string
    userId: string
    name: string
    repoUrl: string
    repoFullName: string
    repoId: bigint | number
    defaultBranch?: string
    framework?: $Enums.Framework
    deployedUrl?: string | null
    webhookId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    envVars?: EnvironmentVariableCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutDeploymentsInput = {
    id?: string
    userId: string
    name: string
    repoUrl: string
    repoFullName: string
    repoId: bigint | number
    defaultBranch?: string
    framework?: $Enums.Framework
    deployedUrl?: string | null
    webhookId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    envVars?: EnvironmentVariableUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutDeploymentsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutDeploymentsInput, ProjectUncheckedCreateWithoutDeploymentsInput>
  }

  export type BuildCreateWithoutDeploymentInput = {
    id?: string
    status?: $Enums.BuildStatus
    logs?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BuildUncheckedCreateWithoutDeploymentInput = {
    id?: string
    status?: $Enums.BuildStatus
    logs?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BuildCreateOrConnectWithoutDeploymentInput = {
    where: BuildWhereUniqueInput
    create: XOR<BuildCreateWithoutDeploymentInput, BuildUncheckedCreateWithoutDeploymentInput>
  }

  export type BuildCreateManyDeploymentInputEnvelope = {
    data: BuildCreateManyDeploymentInput | BuildCreateManyDeploymentInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithoutDeploymentsInput = {
    update: XOR<ProjectUpdateWithoutDeploymentsInput, ProjectUncheckedUpdateWithoutDeploymentsInput>
    create: XOR<ProjectCreateWithoutDeploymentsInput, ProjectUncheckedCreateWithoutDeploymentsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutDeploymentsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutDeploymentsInput, ProjectUncheckedUpdateWithoutDeploymentsInput>
  }

  export type ProjectUpdateWithoutDeploymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    repoUrl?: StringFieldUpdateOperationsInput | string
    repoFullName?: StringFieldUpdateOperationsInput | string
    repoId?: BigIntFieldUpdateOperationsInput | bigint | number
    defaultBranch?: StringFieldUpdateOperationsInput | string
    framework?: EnumFrameworkFieldUpdateOperationsInput | $Enums.Framework
    deployedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    webhookId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    envVars?: EnvironmentVariableUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutDeploymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    repoUrl?: StringFieldUpdateOperationsInput | string
    repoFullName?: StringFieldUpdateOperationsInput | string
    repoId?: BigIntFieldUpdateOperationsInput | bigint | number
    defaultBranch?: StringFieldUpdateOperationsInput | string
    framework?: EnumFrameworkFieldUpdateOperationsInput | $Enums.Framework
    deployedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    webhookId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    envVars?: EnvironmentVariableUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type BuildUpsertWithWhereUniqueWithoutDeploymentInput = {
    where: BuildWhereUniqueInput
    update: XOR<BuildUpdateWithoutDeploymentInput, BuildUncheckedUpdateWithoutDeploymentInput>
    create: XOR<BuildCreateWithoutDeploymentInput, BuildUncheckedCreateWithoutDeploymentInput>
  }

  export type BuildUpdateWithWhereUniqueWithoutDeploymentInput = {
    where: BuildWhereUniqueInput
    data: XOR<BuildUpdateWithoutDeploymentInput, BuildUncheckedUpdateWithoutDeploymentInput>
  }

  export type BuildUpdateManyWithWhereWithoutDeploymentInput = {
    where: BuildScalarWhereInput
    data: XOR<BuildUpdateManyMutationInput, BuildUncheckedUpdateManyWithoutDeploymentInput>
  }

  export type BuildScalarWhereInput = {
    AND?: BuildScalarWhereInput | BuildScalarWhereInput[]
    OR?: BuildScalarWhereInput[]
    NOT?: BuildScalarWhereInput | BuildScalarWhereInput[]
    id?: StringFilter<"Build"> | string
    deploymentId?: StringFilter<"Build"> | string
    status?: EnumBuildStatusFilter<"Build"> | $Enums.BuildStatus
    logs?: StringNullableFilter<"Build"> | string | null
    createdAt?: DateTimeFilter<"Build"> | Date | string
    updatedAt?: DateTimeFilter<"Build"> | Date | string
  }

  export type DeploymentCreateWithoutBuildsInput = {
    id?: string
    status?: $Enums.DeploymentStatus
    branch?: string
    commitSha?: string | null
    commitMessage?: string | null
    deployedUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutDeploymentsInput
  }

  export type DeploymentUncheckedCreateWithoutBuildsInput = {
    id?: string
    projectId: string
    status?: $Enums.DeploymentStatus
    branch?: string
    commitSha?: string | null
    commitMessage?: string | null
    deployedUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeploymentCreateOrConnectWithoutBuildsInput = {
    where: DeploymentWhereUniqueInput
    create: XOR<DeploymentCreateWithoutBuildsInput, DeploymentUncheckedCreateWithoutBuildsInput>
  }

  export type DeploymentUpsertWithoutBuildsInput = {
    update: XOR<DeploymentUpdateWithoutBuildsInput, DeploymentUncheckedUpdateWithoutBuildsInput>
    create: XOR<DeploymentCreateWithoutBuildsInput, DeploymentUncheckedCreateWithoutBuildsInput>
    where?: DeploymentWhereInput
  }

  export type DeploymentUpdateToOneWithWhereWithoutBuildsInput = {
    where?: DeploymentWhereInput
    data: XOR<DeploymentUpdateWithoutBuildsInput, DeploymentUncheckedUpdateWithoutBuildsInput>
  }

  export type DeploymentUpdateWithoutBuildsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumDeploymentStatusFieldUpdateOperationsInput | $Enums.DeploymentStatus
    branch?: StringFieldUpdateOperationsInput | string
    commitSha?: NullableStringFieldUpdateOperationsInput | string | null
    commitMessage?: NullableStringFieldUpdateOperationsInput | string | null
    deployedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutDeploymentsNestedInput
  }

  export type DeploymentUncheckedUpdateWithoutBuildsInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    status?: EnumDeploymentStatusFieldUpdateOperationsInput | $Enums.DeploymentStatus
    branch?: StringFieldUpdateOperationsInput | string
    commitSha?: NullableStringFieldUpdateOperationsInput | string | null
    commitMessage?: NullableStringFieldUpdateOperationsInput | string | null
    deployedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeploymentCreateManyProjectInput = {
    id?: string
    status?: $Enums.DeploymentStatus
    branch?: string
    commitSha?: string | null
    commitMessage?: string | null
    deployedUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EnvironmentVariableCreateManyProjectInput = {
    id?: string
    key: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeploymentUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumDeploymentStatusFieldUpdateOperationsInput | $Enums.DeploymentStatus
    branch?: StringFieldUpdateOperationsInput | string
    commitSha?: NullableStringFieldUpdateOperationsInput | string | null
    commitMessage?: NullableStringFieldUpdateOperationsInput | string | null
    deployedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    builds?: BuildUpdateManyWithoutDeploymentNestedInput
  }

  export type DeploymentUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumDeploymentStatusFieldUpdateOperationsInput | $Enums.DeploymentStatus
    branch?: StringFieldUpdateOperationsInput | string
    commitSha?: NullableStringFieldUpdateOperationsInput | string | null
    commitMessage?: NullableStringFieldUpdateOperationsInput | string | null
    deployedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    builds?: BuildUncheckedUpdateManyWithoutDeploymentNestedInput
  }

  export type DeploymentUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumDeploymentStatusFieldUpdateOperationsInput | $Enums.DeploymentStatus
    branch?: StringFieldUpdateOperationsInput | string
    commitSha?: NullableStringFieldUpdateOperationsInput | string | null
    commitMessage?: NullableStringFieldUpdateOperationsInput | string | null
    deployedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnvironmentVariableUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnvironmentVariableUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnvironmentVariableUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BuildCreateManyDeploymentInput = {
    id?: string
    status?: $Enums.BuildStatus
    logs?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BuildUpdateWithoutDeploymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumBuildStatusFieldUpdateOperationsInput | $Enums.BuildStatus
    logs?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BuildUncheckedUpdateWithoutDeploymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumBuildStatusFieldUpdateOperationsInput | $Enums.BuildStatus
    logs?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BuildUncheckedUpdateManyWithoutDeploymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumBuildStatusFieldUpdateOperationsInput | $Enums.BuildStatus
    logs?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}