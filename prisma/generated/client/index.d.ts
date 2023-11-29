
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model PostVote
 * 
 */
export type PostVote = $Result.DefaultSelection<Prisma.$PostVotePayload>
/**
 * Model Community
 * 
 */
export type Community = $Result.DefaultSelection<Prisma.$CommunityPayload>
/**
 * Model CommunitySubscriber
 * 
 */
export type CommunitySubscriber = $Result.DefaultSelection<Prisma.$CommunitySubscriberPayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>
/**
 * Model CommentVote
 * 
 */
export type CommentVote = $Result.DefaultSelection<Prisma.$CommentVotePayload>
/**
 * Model CommentParentChildren
 * 
 */
export type CommentParentChildren = $Result.DefaultSelection<Prisma.$CommentParentChildrenPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs>;

  /**
   * `prisma.postVote`: Exposes CRUD operations for the **PostVote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PostVotes
    * const postVotes = await prisma.postVote.findMany()
    * ```
    */
  get postVote(): Prisma.PostVoteDelegate<ExtArgs>;

  /**
   * `prisma.community`: Exposes CRUD operations for the **Community** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Communities
    * const communities = await prisma.community.findMany()
    * ```
    */
  get community(): Prisma.CommunityDelegate<ExtArgs>;

  /**
   * `prisma.communitySubscriber`: Exposes CRUD operations for the **CommunitySubscriber** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CommunitySubscribers
    * const communitySubscribers = await prisma.communitySubscriber.findMany()
    * ```
    */
  get communitySubscriber(): Prisma.CommunitySubscriberDelegate<ExtArgs>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs>;

  /**
   * `prisma.commentVote`: Exposes CRUD operations for the **CommentVote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CommentVotes
    * const commentVotes = await prisma.commentVote.findMany()
    * ```
    */
  get commentVote(): Prisma.CommentVoteDelegate<ExtArgs>;

  /**
   * `prisma.commentParentChildren`: Exposes CRUD operations for the **CommentParentChildren** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CommentParentChildren
    * const commentParentChildren = await prisma.commentParentChildren.findMany()
    * ```
    */
  get commentParentChildren(): Prisma.CommentParentChildrenDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 5.6.0
   * Query Engine version: e95e739751f42d8ca026f6b910f5a2dc5adeaeee
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
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
      (Without<T, U> & U) | (Without<U, T> & T)
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    User: 'User',
    Post: 'Post',
    PostVote: 'PostVote',
    Community: 'Community',
    CommunitySubscriber: 'CommunitySubscriber',
    Comment: 'Comment',
    CommentVote: 'CommentVote',
    CommentParentChildren: 'CommentParentChildren'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'post' | 'postVote' | 'community' | 'communitySubscriber' | 'comment' | 'commentVote' | 'commentParentChildren'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>,
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      PostVote: {
        payload: Prisma.$PostVotePayload<ExtArgs>
        fields: Prisma.PostVoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostVoteFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostVotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostVoteFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostVotePayload>
          }
          findFirst: {
            args: Prisma.PostVoteFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostVotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostVoteFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostVotePayload>
          }
          findMany: {
            args: Prisma.PostVoteFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostVotePayload>[]
          }
          create: {
            args: Prisma.PostVoteCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostVotePayload>
          }
          createMany: {
            args: Prisma.PostVoteCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PostVoteDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostVotePayload>
          }
          update: {
            args: Prisma.PostVoteUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostVotePayload>
          }
          deleteMany: {
            args: Prisma.PostVoteDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PostVoteUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PostVoteUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostVotePayload>
          }
          aggregate: {
            args: Prisma.PostVoteAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePostVote>
          }
          groupBy: {
            args: Prisma.PostVoteGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PostVoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostVoteCountArgs<ExtArgs>,
            result: $Utils.Optional<PostVoteCountAggregateOutputType> | number
          }
        }
      }
      Community: {
        payload: Prisma.$CommunityPayload<ExtArgs>
        fields: Prisma.CommunityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommunityFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommunityFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          findFirst: {
            args: Prisma.CommunityFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommunityFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          findMany: {
            args: Prisma.CommunityFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>[]
          }
          create: {
            args: Prisma.CommunityCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          createMany: {
            args: Prisma.CommunityCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CommunityDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          update: {
            args: Prisma.CommunityUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          deleteMany: {
            args: Prisma.CommunityDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CommunityUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CommunityUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommunityPayload>
          }
          aggregate: {
            args: Prisma.CommunityAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCommunity>
          }
          groupBy: {
            args: Prisma.CommunityGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CommunityGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommunityCountArgs<ExtArgs>,
            result: $Utils.Optional<CommunityCountAggregateOutputType> | number
          }
        }
      }
      CommunitySubscriber: {
        payload: Prisma.$CommunitySubscriberPayload<ExtArgs>
        fields: Prisma.CommunitySubscriberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommunitySubscriberFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommunitySubscriberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommunitySubscriberFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommunitySubscriberPayload>
          }
          findFirst: {
            args: Prisma.CommunitySubscriberFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommunitySubscriberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommunitySubscriberFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommunitySubscriberPayload>
          }
          findMany: {
            args: Prisma.CommunitySubscriberFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommunitySubscriberPayload>[]
          }
          create: {
            args: Prisma.CommunitySubscriberCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommunitySubscriberPayload>
          }
          createMany: {
            args: Prisma.CommunitySubscriberCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CommunitySubscriberDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommunitySubscriberPayload>
          }
          update: {
            args: Prisma.CommunitySubscriberUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommunitySubscriberPayload>
          }
          deleteMany: {
            args: Prisma.CommunitySubscriberDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CommunitySubscriberUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CommunitySubscriberUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommunitySubscriberPayload>
          }
          aggregate: {
            args: Prisma.CommunitySubscriberAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCommunitySubscriber>
          }
          groupBy: {
            args: Prisma.CommunitySubscriberGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CommunitySubscriberGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommunitySubscriberCountArgs<ExtArgs>,
            result: $Utils.Optional<CommunitySubscriberCountAggregateOutputType> | number
          }
        }
      }
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>,
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
      CommentVote: {
        payload: Prisma.$CommentVotePayload<ExtArgs>
        fields: Prisma.CommentVoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentVoteFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentVotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentVoteFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentVotePayload>
          }
          findFirst: {
            args: Prisma.CommentVoteFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentVotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentVoteFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentVotePayload>
          }
          findMany: {
            args: Prisma.CommentVoteFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentVotePayload>[]
          }
          create: {
            args: Prisma.CommentVoteCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentVotePayload>
          }
          createMany: {
            args: Prisma.CommentVoteCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CommentVoteDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentVotePayload>
          }
          update: {
            args: Prisma.CommentVoteUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentVotePayload>
          }
          deleteMany: {
            args: Prisma.CommentVoteDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CommentVoteUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CommentVoteUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentVotePayload>
          }
          aggregate: {
            args: Prisma.CommentVoteAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCommentVote>
          }
          groupBy: {
            args: Prisma.CommentVoteGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CommentVoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentVoteCountArgs<ExtArgs>,
            result: $Utils.Optional<CommentVoteCountAggregateOutputType> | number
          }
        }
      }
      CommentParentChildren: {
        payload: Prisma.$CommentParentChildrenPayload<ExtArgs>
        fields: Prisma.CommentParentChildrenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentParentChildrenFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentParentChildrenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentParentChildrenFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentParentChildrenPayload>
          }
          findFirst: {
            args: Prisma.CommentParentChildrenFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentParentChildrenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentParentChildrenFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentParentChildrenPayload>
          }
          findMany: {
            args: Prisma.CommentParentChildrenFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentParentChildrenPayload>[]
          }
          create: {
            args: Prisma.CommentParentChildrenCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentParentChildrenPayload>
          }
          createMany: {
            args: Prisma.CommentParentChildrenCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CommentParentChildrenDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentParentChildrenPayload>
          }
          update: {
            args: Prisma.CommentParentChildrenUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentParentChildrenPayload>
          }
          deleteMany: {
            args: Prisma.CommentParentChildrenDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CommentParentChildrenUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CommentParentChildrenUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentParentChildrenPayload>
          }
          aggregate: {
            args: Prisma.CommentParentChildrenAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCommentParentChildren>
          }
          groupBy: {
            args: Prisma.CommentParentChildrenGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CommentParentChildrenGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentParentChildrenCountArgs<ExtArgs>,
            result: $Utils.Optional<CommentParentChildrenCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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
    | 'update'
    | 'updateMany'
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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    posts: number
    communities: number
    postVote: number
    communitySubscriber: number
    commentVote: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | UserCountOutputTypeCountPostsArgs
    communities?: boolean | UserCountOutputTypeCountCommunitiesArgs
    postVote?: boolean | UserCountOutputTypeCountPostVoteArgs
    communitySubscriber?: boolean | UserCountOutputTypeCountCommunitySubscriberArgs
    commentVote?: boolean | UserCountOutputTypeCountCommentVoteArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommunitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommunityWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostVoteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostVoteWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommunitySubscriberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommunitySubscriberWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentVoteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentVoteWhereInput
  }



  /**
   * Count Type PostCountOutputType
   */

  export type PostCountOutputType = {
    postVote: number
  }

  export type PostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    postVote?: boolean | PostCountOutputTypeCountPostVoteArgs
  }

  // Custom InputTypes

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCountOutputType
     */
    select?: PostCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountPostVoteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostVoteWhereInput
  }



  /**
   * Count Type CommunityCountOutputType
   */

  export type CommunityCountOutputType = {
    posts: number
    communitySubscriber: number
  }

  export type CommunityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | CommunityCountOutputTypeCountPostsArgs
    communitySubscriber?: boolean | CommunityCountOutputTypeCountCommunitySubscriberArgs
  }

  // Custom InputTypes

  /**
   * CommunityCountOutputType without action
   */
  export type CommunityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityCountOutputType
     */
    select?: CommunityCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CommunityCountOutputType without action
   */
  export type CommunityCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }


  /**
   * CommunityCountOutputType without action
   */
  export type CommunityCountOutputTypeCountCommunitySubscriberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommunitySubscriberWhereInput
  }



  /**
   * Count Type CommentCountOutputType
   */

  export type CommentCountOutputType = {
    parent: number
    commentVote: number
  }

  export type CommentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | CommentCountOutputTypeCountParentArgs
    commentVote?: boolean | CommentCountOutputTypeCountCommentVoteArgs
  }

  // Custom InputTypes

  /**
   * CommentCountOutputType without action
   */
  export type CommentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentCountOutputType
     */
    select?: CommentCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CommentCountOutputType without action
   */
  export type CommentCountOutputTypeCountParentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentParentChildrenWhereInput
  }


  /**
   * CommentCountOutputType without action
   */
  export type CommentCountOutputTypeCountCommentVoteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentVoteWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
    image: string | null
    isAdmin: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
    image: string | null
    isAdmin: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password: number
    image: number
    isAdmin: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    image?: true
    isAdmin?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    image?: true
    isAdmin?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    image?: true
    isAdmin?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    email: string
    password: string
    image: string | null
    isAdmin: boolean
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    image?: boolean
    isAdmin?: boolean
    posts?: boolean | User$postsArgs<ExtArgs>
    communities?: boolean | User$communitiesArgs<ExtArgs>
    postVote?: boolean | User$postVoteArgs<ExtArgs>
    communitySubscriber?: boolean | User$communitySubscriberArgs<ExtArgs>
    commentVote?: boolean | User$commentVoteArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    image?: boolean
    isAdmin?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | User$postsArgs<ExtArgs>
    communities?: boolean | User$communitiesArgs<ExtArgs>
    postVote?: boolean | User$postVoteArgs<ExtArgs>
    communitySubscriber?: boolean | User$communitySubscriberArgs<ExtArgs>
    commentVote?: boolean | User$commentVoteArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      posts: Prisma.$PostPayload<ExtArgs>[]
      communities: Prisma.$CommunityPayload<ExtArgs>[]
      postVote: Prisma.$PostVotePayload<ExtArgs>[]
      communitySubscriber: Prisma.$CommunitySubscriberPayload<ExtArgs>[]
      commentVote: Prisma.$CommentVotePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      email: string
      password: string
      image: string | null
      isAdmin: boolean
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    posts<T extends User$postsArgs<ExtArgs> = {}>(args?: Subset<T, User$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findMany'> | Null>;

    communities<T extends User$communitiesArgs<ExtArgs> = {}>(args?: Subset<T, User$communitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, 'findMany'> | Null>;

    postVote<T extends User$postVoteArgs<ExtArgs> = {}>(args?: Subset<T, User$postVoteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostVotePayload<ExtArgs>, T, 'findMany'> | Null>;

    communitySubscriber<T extends User$communitySubscriberArgs<ExtArgs> = {}>(args?: Subset<T, User$communitySubscriberArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunitySubscriberPayload<ExtArgs>, T, 'findMany'> | Null>;

    commentVote<T extends User$commentVoteArgs<ExtArgs> = {}>(args?: Subset<T, User$commentVoteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentVotePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly image: FieldRef<"User", 'String'>
    readonly isAdmin: FieldRef<"User", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.posts
   */
  export type User$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }


  /**
   * User.communities
   */
  export type User$communitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommunityInclude<ExtArgs> | null
    where?: CommunityWhereInput
    orderBy?: CommunityOrderByWithRelationInput | CommunityOrderByWithRelationInput[]
    cursor?: CommunityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommunityScalarFieldEnum | CommunityScalarFieldEnum[]
  }


  /**
   * User.postVote
   */
  export type User$postVoteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostVote
     */
    select?: PostVoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostVoteInclude<ExtArgs> | null
    where?: PostVoteWhereInput
    orderBy?: PostVoteOrderByWithRelationInput | PostVoteOrderByWithRelationInput[]
    cursor?: PostVoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostVoteScalarFieldEnum | PostVoteScalarFieldEnum[]
  }


  /**
   * User.communitySubscriber
   */
  export type User$communitySubscriberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunitySubscriber
     */
    select?: CommunitySubscriberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommunitySubscriberInclude<ExtArgs> | null
    where?: CommunitySubscriberWhereInput
    orderBy?: CommunitySubscriberOrderByWithRelationInput | CommunitySubscriberOrderByWithRelationInput[]
    cursor?: CommunitySubscriberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommunitySubscriberScalarFieldEnum | CommunitySubscriberScalarFieldEnum[]
  }


  /**
   * User.commentVote
   */
  export type User$commentVoteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentVote
     */
    select?: CommentVoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentVoteInclude<ExtArgs> | null
    where?: CommentVoteWhereInput
    orderBy?: CommentVoteOrderByWithRelationInput | CommentVoteOrderByWithRelationInput[]
    cursor?: CommentVoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentVoteScalarFieldEnum | CommentVoteScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostAvgAggregateOutputType = {
    id: number | null
    commentCount: number | null
    userId: number | null
    communityId: number | null
  }

  export type PostSumAggregateOutputType = {
    id: number | null
    commentCount: number | null
    userId: number | null
    communityId: number | null
  }

  export type PostMinAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    imageUrl: string | null
    commentCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
    communityId: number | null
  }

  export type PostMaxAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    imageUrl: string | null
    commentCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
    communityId: number | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    title: number
    content: number
    imageUrl: number
    commentCount: number
    createdAt: number
    updatedAt: number
    userId: number
    communityId: number
    _all: number
  }


  export type PostAvgAggregateInputType = {
    id?: true
    commentCount?: true
    userId?: true
    communityId?: true
  }

  export type PostSumAggregateInputType = {
    id?: true
    commentCount?: true
    userId?: true
    communityId?: true
  }

  export type PostMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    imageUrl?: true
    commentCount?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    communityId?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    imageUrl?: true
    commentCount?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    communityId?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    imageUrl?: true
    commentCount?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    communityId?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _avg?: PostAvgAggregateInputType
    _sum?: PostSumAggregateInputType
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: number
    title: string
    content: string
    imageUrl: string | null
    commentCount: number
    createdAt: Date
    updatedAt: Date
    userId: number
    communityId: number
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    imageUrl?: boolean
    commentCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    communityId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    community?: boolean | CommunityDefaultArgs<ExtArgs>
    postVote?: boolean | Post$postVoteArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    imageUrl?: boolean
    commentCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    communityId?: boolean
  }

  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    community?: boolean | CommunityDefaultArgs<ExtArgs>
    postVote?: boolean | Post$postVoteArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      community: Prisma.$CommunityPayload<ExtArgs>
      postVote: Prisma.$PostVotePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      content: string
      imageUrl: string | null
      commentCount: number
      createdAt: Date
      updatedAt: Date
      userId: number
      communityId: number
    }, ExtArgs["result"]["post"]>
    composites: {}
  }


  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PostFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Post that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PostFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PostFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
    **/
    create<T extends PostCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PostCreateArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Posts.
     *     @param {PostCreateManyArgs} args - Arguments to create many Posts.
     *     @example
     *     // Create many Posts
     *     const post = await prisma.post.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PostCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
    **/
    delete<T extends PostDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PostDeleteArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PostUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PostUpdateArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PostDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PostUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
    **/
    upsert<T extends PostUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PostUpsertArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
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
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    community<T extends CommunityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CommunityDefaultArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    postVote<T extends Post$postVoteArgs<ExtArgs> = {}>(args?: Subset<T, Post$postVoteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostVotePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Post model
   */ 
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'Int'>
    readonly title: FieldRef<"Post", 'String'>
    readonly content: FieldRef<"Post", 'String'>
    readonly imageUrl: FieldRef<"Post", 'String'>
    readonly commentCount: FieldRef<"Post", 'Int'>
    readonly createdAt: FieldRef<"Post", 'DateTime'>
    readonly updatedAt: FieldRef<"Post", 'DateTime'>
    readonly userId: FieldRef<"Post", 'Int'>
    readonly communityId: FieldRef<"Post", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }


  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }


  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }


  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }


  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }


  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }


  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }


  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
  }


  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }


  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }


  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
  }


  /**
   * Post.postVote
   */
  export type Post$postVoteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostVote
     */
    select?: PostVoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostVoteInclude<ExtArgs> | null
    where?: PostVoteWhereInput
    orderBy?: PostVoteOrderByWithRelationInput | PostVoteOrderByWithRelationInput[]
    cursor?: PostVoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostVoteScalarFieldEnum | PostVoteScalarFieldEnum[]
  }


  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
  }



  /**
   * Model PostVote
   */

  export type AggregatePostVote = {
    _count: PostVoteCountAggregateOutputType | null
    _avg: PostVoteAvgAggregateOutputType | null
    _sum: PostVoteSumAggregateOutputType | null
    _min: PostVoteMinAggregateOutputType | null
    _max: PostVoteMaxAggregateOutputType | null
  }

  export type PostVoteAvgAggregateOutputType = {
    id: number | null
    postId: number | null
    userId: number | null
  }

  export type PostVoteSumAggregateOutputType = {
    id: number | null
    postId: number | null
    userId: number | null
  }

  export type PostVoteMinAggregateOutputType = {
    id: number | null
    upvote: boolean | null
    downvot: boolean | null
    postId: number | null
    userId: number | null
  }

  export type PostVoteMaxAggregateOutputType = {
    id: number | null
    upvote: boolean | null
    downvot: boolean | null
    postId: number | null
    userId: number | null
  }

  export type PostVoteCountAggregateOutputType = {
    id: number
    upvote: number
    downvot: number
    postId: number
    userId: number
    _all: number
  }


  export type PostVoteAvgAggregateInputType = {
    id?: true
    postId?: true
    userId?: true
  }

  export type PostVoteSumAggregateInputType = {
    id?: true
    postId?: true
    userId?: true
  }

  export type PostVoteMinAggregateInputType = {
    id?: true
    upvote?: true
    downvot?: true
    postId?: true
    userId?: true
  }

  export type PostVoteMaxAggregateInputType = {
    id?: true
    upvote?: true
    downvot?: true
    postId?: true
    userId?: true
  }

  export type PostVoteCountAggregateInputType = {
    id?: true
    upvote?: true
    downvot?: true
    postId?: true
    userId?: true
    _all?: true
  }

  export type PostVoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostVote to aggregate.
     */
    where?: PostVoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostVotes to fetch.
     */
    orderBy?: PostVoteOrderByWithRelationInput | PostVoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostVoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostVotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostVotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PostVotes
    **/
    _count?: true | PostVoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostVoteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostVoteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostVoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostVoteMaxAggregateInputType
  }

  export type GetPostVoteAggregateType<T extends PostVoteAggregateArgs> = {
        [P in keyof T & keyof AggregatePostVote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostVote[P]>
      : GetScalarType<T[P], AggregatePostVote[P]>
  }




  export type PostVoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostVoteWhereInput
    orderBy?: PostVoteOrderByWithAggregationInput | PostVoteOrderByWithAggregationInput[]
    by: PostVoteScalarFieldEnum[] | PostVoteScalarFieldEnum
    having?: PostVoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostVoteCountAggregateInputType | true
    _avg?: PostVoteAvgAggregateInputType
    _sum?: PostVoteSumAggregateInputType
    _min?: PostVoteMinAggregateInputType
    _max?: PostVoteMaxAggregateInputType
  }

  export type PostVoteGroupByOutputType = {
    id: number
    upvote: boolean
    downvot: boolean
    postId: number
    userId: number
    _count: PostVoteCountAggregateOutputType | null
    _avg: PostVoteAvgAggregateOutputType | null
    _sum: PostVoteSumAggregateOutputType | null
    _min: PostVoteMinAggregateOutputType | null
    _max: PostVoteMaxAggregateOutputType | null
  }

  type GetPostVoteGroupByPayload<T extends PostVoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostVoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostVoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostVoteGroupByOutputType[P]>
            : GetScalarType<T[P], PostVoteGroupByOutputType[P]>
        }
      >
    >


  export type PostVoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    upvote?: boolean
    downvot?: boolean
    postId?: boolean
    userId?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postVote"]>

  export type PostVoteSelectScalar = {
    id?: boolean
    upvote?: boolean
    downvot?: boolean
    postId?: boolean
    userId?: boolean
  }

  export type PostVoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $PostVotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PostVote"
    objects: {
      post: Prisma.$PostPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      upvote: boolean
      downvot: boolean
      postId: number
      userId: number
    }, ExtArgs["result"]["postVote"]>
    composites: {}
  }


  type PostVoteGetPayload<S extends boolean | null | undefined | PostVoteDefaultArgs> = $Result.GetResult<Prisma.$PostVotePayload, S>

  type PostVoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PostVoteFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: PostVoteCountAggregateInputType | true
    }

  export interface PostVoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PostVote'], meta: { name: 'PostVote' } }
    /**
     * Find zero or one PostVote that matches the filter.
     * @param {PostVoteFindUniqueArgs} args - Arguments to find a PostVote
     * @example
     * // Get one PostVote
     * const postVote = await prisma.postVote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PostVoteFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PostVoteFindUniqueArgs<ExtArgs>>
    ): Prisma__PostVoteClient<$Result.GetResult<Prisma.$PostVotePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one PostVote that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PostVoteFindUniqueOrThrowArgs} args - Arguments to find a PostVote
     * @example
     * // Get one PostVote
     * const postVote = await prisma.postVote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PostVoteFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PostVoteFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PostVoteClient<$Result.GetResult<Prisma.$PostVotePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first PostVote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostVoteFindFirstArgs} args - Arguments to find a PostVote
     * @example
     * // Get one PostVote
     * const postVote = await prisma.postVote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PostVoteFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PostVoteFindFirstArgs<ExtArgs>>
    ): Prisma__PostVoteClient<$Result.GetResult<Prisma.$PostVotePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first PostVote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostVoteFindFirstOrThrowArgs} args - Arguments to find a PostVote
     * @example
     * // Get one PostVote
     * const postVote = await prisma.postVote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PostVoteFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PostVoteFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PostVoteClient<$Result.GetResult<Prisma.$PostVotePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more PostVotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostVoteFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostVotes
     * const postVotes = await prisma.postVote.findMany()
     * 
     * // Get first 10 PostVotes
     * const postVotes = await prisma.postVote.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postVoteWithIdOnly = await prisma.postVote.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PostVoteFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PostVoteFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostVotePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a PostVote.
     * @param {PostVoteCreateArgs} args - Arguments to create a PostVote.
     * @example
     * // Create one PostVote
     * const PostVote = await prisma.postVote.create({
     *   data: {
     *     // ... data to create a PostVote
     *   }
     * })
     * 
    **/
    create<T extends PostVoteCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PostVoteCreateArgs<ExtArgs>>
    ): Prisma__PostVoteClient<$Result.GetResult<Prisma.$PostVotePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many PostVotes.
     *     @param {PostVoteCreateManyArgs} args - Arguments to create many PostVotes.
     *     @example
     *     // Create many PostVotes
     *     const postVote = await prisma.postVote.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PostVoteCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PostVoteCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PostVote.
     * @param {PostVoteDeleteArgs} args - Arguments to delete one PostVote.
     * @example
     * // Delete one PostVote
     * const PostVote = await prisma.postVote.delete({
     *   where: {
     *     // ... filter to delete one PostVote
     *   }
     * })
     * 
    **/
    delete<T extends PostVoteDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PostVoteDeleteArgs<ExtArgs>>
    ): Prisma__PostVoteClient<$Result.GetResult<Prisma.$PostVotePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one PostVote.
     * @param {PostVoteUpdateArgs} args - Arguments to update one PostVote.
     * @example
     * // Update one PostVote
     * const postVote = await prisma.postVote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PostVoteUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PostVoteUpdateArgs<ExtArgs>>
    ): Prisma__PostVoteClient<$Result.GetResult<Prisma.$PostVotePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more PostVotes.
     * @param {PostVoteDeleteManyArgs} args - Arguments to filter PostVotes to delete.
     * @example
     * // Delete a few PostVotes
     * const { count } = await prisma.postVote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PostVoteDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PostVoteDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostVotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostVoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostVotes
     * const postVote = await prisma.postVote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PostVoteUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PostVoteUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PostVote.
     * @param {PostVoteUpsertArgs} args - Arguments to update or create a PostVote.
     * @example
     * // Update or create a PostVote
     * const postVote = await prisma.postVote.upsert({
     *   create: {
     *     // ... data to create a PostVote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostVote we want to update
     *   }
     * })
    **/
    upsert<T extends PostVoteUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PostVoteUpsertArgs<ExtArgs>>
    ): Prisma__PostVoteClient<$Result.GetResult<Prisma.$PostVotePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of PostVotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostVoteCountArgs} args - Arguments to filter PostVotes to count.
     * @example
     * // Count the number of PostVotes
     * const count = await prisma.postVote.count({
     *   where: {
     *     // ... the filter for the PostVotes we want to count
     *   }
     * })
    **/
    count<T extends PostVoteCountArgs>(
      args?: Subset<T, PostVoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostVoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PostVote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostVoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostVoteAggregateArgs>(args: Subset<T, PostVoteAggregateArgs>): Prisma.PrismaPromise<GetPostVoteAggregateType<T>>

    /**
     * Group by PostVote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostVoteGroupByArgs} args - Group by arguments.
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
      T extends PostVoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostVoteGroupByArgs['orderBy'] }
        : { orderBy?: PostVoteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PostVoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostVoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PostVote model
   */
  readonly fields: PostVoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PostVote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostVoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the PostVote model
   */ 
  interface PostVoteFieldRefs {
    readonly id: FieldRef<"PostVote", 'Int'>
    readonly upvote: FieldRef<"PostVote", 'Boolean'>
    readonly downvot: FieldRef<"PostVote", 'Boolean'>
    readonly postId: FieldRef<"PostVote", 'Int'>
    readonly userId: FieldRef<"PostVote", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * PostVote findUnique
   */
  export type PostVoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostVote
     */
    select?: PostVoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostVoteInclude<ExtArgs> | null
    /**
     * Filter, which PostVote to fetch.
     */
    where: PostVoteWhereUniqueInput
  }


  /**
   * PostVote findUniqueOrThrow
   */
  export type PostVoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostVote
     */
    select?: PostVoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostVoteInclude<ExtArgs> | null
    /**
     * Filter, which PostVote to fetch.
     */
    where: PostVoteWhereUniqueInput
  }


  /**
   * PostVote findFirst
   */
  export type PostVoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostVote
     */
    select?: PostVoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostVoteInclude<ExtArgs> | null
    /**
     * Filter, which PostVote to fetch.
     */
    where?: PostVoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostVotes to fetch.
     */
    orderBy?: PostVoteOrderByWithRelationInput | PostVoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostVotes.
     */
    cursor?: PostVoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostVotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostVotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostVotes.
     */
    distinct?: PostVoteScalarFieldEnum | PostVoteScalarFieldEnum[]
  }


  /**
   * PostVote findFirstOrThrow
   */
  export type PostVoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostVote
     */
    select?: PostVoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostVoteInclude<ExtArgs> | null
    /**
     * Filter, which PostVote to fetch.
     */
    where?: PostVoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostVotes to fetch.
     */
    orderBy?: PostVoteOrderByWithRelationInput | PostVoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostVotes.
     */
    cursor?: PostVoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostVotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostVotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostVotes.
     */
    distinct?: PostVoteScalarFieldEnum | PostVoteScalarFieldEnum[]
  }


  /**
   * PostVote findMany
   */
  export type PostVoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostVote
     */
    select?: PostVoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostVoteInclude<ExtArgs> | null
    /**
     * Filter, which PostVotes to fetch.
     */
    where?: PostVoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostVotes to fetch.
     */
    orderBy?: PostVoteOrderByWithRelationInput | PostVoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PostVotes.
     */
    cursor?: PostVoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostVotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostVotes.
     */
    skip?: number
    distinct?: PostVoteScalarFieldEnum | PostVoteScalarFieldEnum[]
  }


  /**
   * PostVote create
   */
  export type PostVoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostVote
     */
    select?: PostVoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostVoteInclude<ExtArgs> | null
    /**
     * The data needed to create a PostVote.
     */
    data: XOR<PostVoteCreateInput, PostVoteUncheckedCreateInput>
  }


  /**
   * PostVote createMany
   */
  export type PostVoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PostVotes.
     */
    data: PostVoteCreateManyInput | PostVoteCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * PostVote update
   */
  export type PostVoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostVote
     */
    select?: PostVoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostVoteInclude<ExtArgs> | null
    /**
     * The data needed to update a PostVote.
     */
    data: XOR<PostVoteUpdateInput, PostVoteUncheckedUpdateInput>
    /**
     * Choose, which PostVote to update.
     */
    where: PostVoteWhereUniqueInput
  }


  /**
   * PostVote updateMany
   */
  export type PostVoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PostVotes.
     */
    data: XOR<PostVoteUpdateManyMutationInput, PostVoteUncheckedUpdateManyInput>
    /**
     * Filter which PostVotes to update
     */
    where?: PostVoteWhereInput
  }


  /**
   * PostVote upsert
   */
  export type PostVoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostVote
     */
    select?: PostVoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostVoteInclude<ExtArgs> | null
    /**
     * The filter to search for the PostVote to update in case it exists.
     */
    where: PostVoteWhereUniqueInput
    /**
     * In case the PostVote found by the `where` argument doesn't exist, create a new PostVote with this data.
     */
    create: XOR<PostVoteCreateInput, PostVoteUncheckedCreateInput>
    /**
     * In case the PostVote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostVoteUpdateInput, PostVoteUncheckedUpdateInput>
  }


  /**
   * PostVote delete
   */
  export type PostVoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostVote
     */
    select?: PostVoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostVoteInclude<ExtArgs> | null
    /**
     * Filter which PostVote to delete.
     */
    where: PostVoteWhereUniqueInput
  }


  /**
   * PostVote deleteMany
   */
  export type PostVoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostVotes to delete
     */
    where?: PostVoteWhereInput
  }


  /**
   * PostVote without action
   */
  export type PostVoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostVote
     */
    select?: PostVoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostVoteInclude<ExtArgs> | null
  }



  /**
   * Model Community
   */

  export type AggregateCommunity = {
    _count: CommunityCountAggregateOutputType | null
    _avg: CommunityAvgAggregateOutputType | null
    _sum: CommunitySumAggregateOutputType | null
    _min: CommunityMinAggregateOutputType | null
    _max: CommunityMaxAggregateOutputType | null
  }

  export type CommunityAvgAggregateOutputType = {
    id: number | null
    adminId: number | null
    subscriberCount: number | null
  }

  export type CommunitySumAggregateOutputType = {
    id: number | null
    adminId: number | null
    subscriberCount: number | null
  }

  export type CommunityMinAggregateOutputType = {
    id: number | null
    adminId: number | null
    name: string | null
    bio: string | null
    subscriberCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommunityMaxAggregateOutputType = {
    id: number | null
    adminId: number | null
    name: string | null
    bio: string | null
    subscriberCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommunityCountAggregateOutputType = {
    id: number
    adminId: number
    name: number
    bio: number
    subscriberCount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CommunityAvgAggregateInputType = {
    id?: true
    adminId?: true
    subscriberCount?: true
  }

  export type CommunitySumAggregateInputType = {
    id?: true
    adminId?: true
    subscriberCount?: true
  }

  export type CommunityMinAggregateInputType = {
    id?: true
    adminId?: true
    name?: true
    bio?: true
    subscriberCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommunityMaxAggregateInputType = {
    id?: true
    adminId?: true
    name?: true
    bio?: true
    subscriberCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommunityCountAggregateInputType = {
    id?: true
    adminId?: true
    name?: true
    bio?: true
    subscriberCount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CommunityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Community to aggregate.
     */
    where?: CommunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Communities to fetch.
     */
    orderBy?: CommunityOrderByWithRelationInput | CommunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Communities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Communities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Communities
    **/
    _count?: true | CommunityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommunityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommunitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommunityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommunityMaxAggregateInputType
  }

  export type GetCommunityAggregateType<T extends CommunityAggregateArgs> = {
        [P in keyof T & keyof AggregateCommunity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommunity[P]>
      : GetScalarType<T[P], AggregateCommunity[P]>
  }




  export type CommunityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommunityWhereInput
    orderBy?: CommunityOrderByWithAggregationInput | CommunityOrderByWithAggregationInput[]
    by: CommunityScalarFieldEnum[] | CommunityScalarFieldEnum
    having?: CommunityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommunityCountAggregateInputType | true
    _avg?: CommunityAvgAggregateInputType
    _sum?: CommunitySumAggregateInputType
    _min?: CommunityMinAggregateInputType
    _max?: CommunityMaxAggregateInputType
  }

  export type CommunityGroupByOutputType = {
    id: number
    adminId: number
    name: string
    bio: string
    subscriberCount: number
    createdAt: Date
    updatedAt: Date
    _count: CommunityCountAggregateOutputType | null
    _avg: CommunityAvgAggregateOutputType | null
    _sum: CommunitySumAggregateOutputType | null
    _min: CommunityMinAggregateOutputType | null
    _max: CommunityMaxAggregateOutputType | null
  }

  type GetCommunityGroupByPayload<T extends CommunityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommunityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommunityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommunityGroupByOutputType[P]>
            : GetScalarType<T[P], CommunityGroupByOutputType[P]>
        }
      >
    >


  export type CommunitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    adminId?: boolean
    name?: boolean
    bio?: boolean
    subscriberCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    admin?: boolean | UserDefaultArgs<ExtArgs>
    posts?: boolean | Community$postsArgs<ExtArgs>
    communitySubscriber?: boolean | Community$communitySubscriberArgs<ExtArgs>
    _count?: boolean | CommunityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["community"]>

  export type CommunitySelectScalar = {
    id?: boolean
    adminId?: boolean
    name?: boolean
    bio?: boolean
    subscriberCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CommunityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | UserDefaultArgs<ExtArgs>
    posts?: boolean | Community$postsArgs<ExtArgs>
    communitySubscriber?: boolean | Community$communitySubscriberArgs<ExtArgs>
    _count?: boolean | CommunityCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CommunityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Community"
    objects: {
      admin: Prisma.$UserPayload<ExtArgs>
      posts: Prisma.$PostPayload<ExtArgs>[]
      communitySubscriber: Prisma.$CommunitySubscriberPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      adminId: number
      name: string
      bio: string
      subscriberCount: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["community"]>
    composites: {}
  }


  type CommunityGetPayload<S extends boolean | null | undefined | CommunityDefaultArgs> = $Result.GetResult<Prisma.$CommunityPayload, S>

  type CommunityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CommunityFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: CommunityCountAggregateInputType | true
    }

  export interface CommunityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Community'], meta: { name: 'Community' } }
    /**
     * Find zero or one Community that matches the filter.
     * @param {CommunityFindUniqueArgs} args - Arguments to find a Community
     * @example
     * // Get one Community
     * const community = await prisma.community.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CommunityFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CommunityFindUniqueArgs<ExtArgs>>
    ): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Community that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CommunityFindUniqueOrThrowArgs} args - Arguments to find a Community
     * @example
     * // Get one Community
     * const community = await prisma.community.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CommunityFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CommunityFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Community that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityFindFirstArgs} args - Arguments to find a Community
     * @example
     * // Get one Community
     * const community = await prisma.community.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CommunityFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CommunityFindFirstArgs<ExtArgs>>
    ): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Community that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityFindFirstOrThrowArgs} args - Arguments to find a Community
     * @example
     * // Get one Community
     * const community = await prisma.community.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CommunityFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CommunityFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Communities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Communities
     * const communities = await prisma.community.findMany()
     * 
     * // Get first 10 Communities
     * const communities = await prisma.community.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const communityWithIdOnly = await prisma.community.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CommunityFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CommunityFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Community.
     * @param {CommunityCreateArgs} args - Arguments to create a Community.
     * @example
     * // Create one Community
     * const Community = await prisma.community.create({
     *   data: {
     *     // ... data to create a Community
     *   }
     * })
     * 
    **/
    create<T extends CommunityCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CommunityCreateArgs<ExtArgs>>
    ): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Communities.
     *     @param {CommunityCreateManyArgs} args - Arguments to create many Communities.
     *     @example
     *     // Create many Communities
     *     const community = await prisma.community.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CommunityCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CommunityCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Community.
     * @param {CommunityDeleteArgs} args - Arguments to delete one Community.
     * @example
     * // Delete one Community
     * const Community = await prisma.community.delete({
     *   where: {
     *     // ... filter to delete one Community
     *   }
     * })
     * 
    **/
    delete<T extends CommunityDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CommunityDeleteArgs<ExtArgs>>
    ): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Community.
     * @param {CommunityUpdateArgs} args - Arguments to update one Community.
     * @example
     * // Update one Community
     * const community = await prisma.community.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CommunityUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CommunityUpdateArgs<ExtArgs>>
    ): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Communities.
     * @param {CommunityDeleteManyArgs} args - Arguments to filter Communities to delete.
     * @example
     * // Delete a few Communities
     * const { count } = await prisma.community.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CommunityDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CommunityDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Communities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Communities
     * const community = await prisma.community.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CommunityUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CommunityUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Community.
     * @param {CommunityUpsertArgs} args - Arguments to update or create a Community.
     * @example
     * // Update or create a Community
     * const community = await prisma.community.upsert({
     *   create: {
     *     // ... data to create a Community
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Community we want to update
     *   }
     * })
    **/
    upsert<T extends CommunityUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CommunityUpsertArgs<ExtArgs>>
    ): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Communities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityCountArgs} args - Arguments to filter Communities to count.
     * @example
     * // Count the number of Communities
     * const count = await prisma.community.count({
     *   where: {
     *     // ... the filter for the Communities we want to count
     *   }
     * })
    **/
    count<T extends CommunityCountArgs>(
      args?: Subset<T, CommunityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommunityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Community.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommunityAggregateArgs>(args: Subset<T, CommunityAggregateArgs>): Prisma.PrismaPromise<GetCommunityAggregateType<T>>

    /**
     * Group by Community.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityGroupByArgs} args - Group by arguments.
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
      T extends CommunityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommunityGroupByArgs['orderBy'] }
        : { orderBy?: CommunityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommunityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommunityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Community model
   */
  readonly fields: CommunityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Community.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommunityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    admin<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    posts<T extends Community$postsArgs<ExtArgs> = {}>(args?: Subset<T, Community$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findMany'> | Null>;

    communitySubscriber<T extends Community$communitySubscriberArgs<ExtArgs> = {}>(args?: Subset<T, Community$communitySubscriberArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunitySubscriberPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Community model
   */ 
  interface CommunityFieldRefs {
    readonly id: FieldRef<"Community", 'Int'>
    readonly adminId: FieldRef<"Community", 'Int'>
    readonly name: FieldRef<"Community", 'String'>
    readonly bio: FieldRef<"Community", 'String'>
    readonly subscriberCount: FieldRef<"Community", 'Int'>
    readonly createdAt: FieldRef<"Community", 'DateTime'>
    readonly updatedAt: FieldRef<"Community", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Community findUnique
   */
  export type CommunityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter, which Community to fetch.
     */
    where: CommunityWhereUniqueInput
  }


  /**
   * Community findUniqueOrThrow
   */
  export type CommunityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter, which Community to fetch.
     */
    where: CommunityWhereUniqueInput
  }


  /**
   * Community findFirst
   */
  export type CommunityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter, which Community to fetch.
     */
    where?: CommunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Communities to fetch.
     */
    orderBy?: CommunityOrderByWithRelationInput | CommunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Communities.
     */
    cursor?: CommunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Communities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Communities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Communities.
     */
    distinct?: CommunityScalarFieldEnum | CommunityScalarFieldEnum[]
  }


  /**
   * Community findFirstOrThrow
   */
  export type CommunityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter, which Community to fetch.
     */
    where?: CommunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Communities to fetch.
     */
    orderBy?: CommunityOrderByWithRelationInput | CommunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Communities.
     */
    cursor?: CommunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Communities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Communities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Communities.
     */
    distinct?: CommunityScalarFieldEnum | CommunityScalarFieldEnum[]
  }


  /**
   * Community findMany
   */
  export type CommunityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter, which Communities to fetch.
     */
    where?: CommunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Communities to fetch.
     */
    orderBy?: CommunityOrderByWithRelationInput | CommunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Communities.
     */
    cursor?: CommunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Communities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Communities.
     */
    skip?: number
    distinct?: CommunityScalarFieldEnum | CommunityScalarFieldEnum[]
  }


  /**
   * Community create
   */
  export type CommunityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * The data needed to create a Community.
     */
    data: XOR<CommunityCreateInput, CommunityUncheckedCreateInput>
  }


  /**
   * Community createMany
   */
  export type CommunityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Communities.
     */
    data: CommunityCreateManyInput | CommunityCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Community update
   */
  export type CommunityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * The data needed to update a Community.
     */
    data: XOR<CommunityUpdateInput, CommunityUncheckedUpdateInput>
    /**
     * Choose, which Community to update.
     */
    where: CommunityWhereUniqueInput
  }


  /**
   * Community updateMany
   */
  export type CommunityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Communities.
     */
    data: XOR<CommunityUpdateManyMutationInput, CommunityUncheckedUpdateManyInput>
    /**
     * Filter which Communities to update
     */
    where?: CommunityWhereInput
  }


  /**
   * Community upsert
   */
  export type CommunityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * The filter to search for the Community to update in case it exists.
     */
    where: CommunityWhereUniqueInput
    /**
     * In case the Community found by the `where` argument doesn't exist, create a new Community with this data.
     */
    create: XOR<CommunityCreateInput, CommunityUncheckedCreateInput>
    /**
     * In case the Community was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommunityUpdateInput, CommunityUncheckedUpdateInput>
  }


  /**
   * Community delete
   */
  export type CommunityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommunityInclude<ExtArgs> | null
    /**
     * Filter which Community to delete.
     */
    where: CommunityWhereUniqueInput
  }


  /**
   * Community deleteMany
   */
  export type CommunityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Communities to delete
     */
    where?: CommunityWhereInput
  }


  /**
   * Community.posts
   */
  export type Community$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }


  /**
   * Community.communitySubscriber
   */
  export type Community$communitySubscriberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunitySubscriber
     */
    select?: CommunitySubscriberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommunitySubscriberInclude<ExtArgs> | null
    where?: CommunitySubscriberWhereInput
    orderBy?: CommunitySubscriberOrderByWithRelationInput | CommunitySubscriberOrderByWithRelationInput[]
    cursor?: CommunitySubscriberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommunitySubscriberScalarFieldEnum | CommunitySubscriberScalarFieldEnum[]
  }


  /**
   * Community without action
   */
  export type CommunityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Community
     */
    select?: CommunitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommunityInclude<ExtArgs> | null
  }



  /**
   * Model CommunitySubscriber
   */

  export type AggregateCommunitySubscriber = {
    _count: CommunitySubscriberCountAggregateOutputType | null
    _avg: CommunitySubscriberAvgAggregateOutputType | null
    _sum: CommunitySubscriberSumAggregateOutputType | null
    _min: CommunitySubscriberMinAggregateOutputType | null
    _max: CommunitySubscriberMaxAggregateOutputType | null
  }

  export type CommunitySubscriberAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    communityId: number | null
  }

  export type CommunitySubscriberSumAggregateOutputType = {
    id: number | null
    userId: number | null
    communityId: number | null
  }

  export type CommunitySubscriberMinAggregateOutputType = {
    id: number | null
    userId: number | null
    communityId: number | null
  }

  export type CommunitySubscriberMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    communityId: number | null
  }

  export type CommunitySubscriberCountAggregateOutputType = {
    id: number
    userId: number
    communityId: number
    _all: number
  }


  export type CommunitySubscriberAvgAggregateInputType = {
    id?: true
    userId?: true
    communityId?: true
  }

  export type CommunitySubscriberSumAggregateInputType = {
    id?: true
    userId?: true
    communityId?: true
  }

  export type CommunitySubscriberMinAggregateInputType = {
    id?: true
    userId?: true
    communityId?: true
  }

  export type CommunitySubscriberMaxAggregateInputType = {
    id?: true
    userId?: true
    communityId?: true
  }

  export type CommunitySubscriberCountAggregateInputType = {
    id?: true
    userId?: true
    communityId?: true
    _all?: true
  }

  export type CommunitySubscriberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommunitySubscriber to aggregate.
     */
    where?: CommunitySubscriberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunitySubscribers to fetch.
     */
    orderBy?: CommunitySubscriberOrderByWithRelationInput | CommunitySubscriberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommunitySubscriberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunitySubscribers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunitySubscribers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CommunitySubscribers
    **/
    _count?: true | CommunitySubscriberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommunitySubscriberAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommunitySubscriberSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommunitySubscriberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommunitySubscriberMaxAggregateInputType
  }

  export type GetCommunitySubscriberAggregateType<T extends CommunitySubscriberAggregateArgs> = {
        [P in keyof T & keyof AggregateCommunitySubscriber]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommunitySubscriber[P]>
      : GetScalarType<T[P], AggregateCommunitySubscriber[P]>
  }




  export type CommunitySubscriberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommunitySubscriberWhereInput
    orderBy?: CommunitySubscriberOrderByWithAggregationInput | CommunitySubscriberOrderByWithAggregationInput[]
    by: CommunitySubscriberScalarFieldEnum[] | CommunitySubscriberScalarFieldEnum
    having?: CommunitySubscriberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommunitySubscriberCountAggregateInputType | true
    _avg?: CommunitySubscriberAvgAggregateInputType
    _sum?: CommunitySubscriberSumAggregateInputType
    _min?: CommunitySubscriberMinAggregateInputType
    _max?: CommunitySubscriberMaxAggregateInputType
  }

  export type CommunitySubscriberGroupByOutputType = {
    id: number
    userId: number
    communityId: number
    _count: CommunitySubscriberCountAggregateOutputType | null
    _avg: CommunitySubscriberAvgAggregateOutputType | null
    _sum: CommunitySubscriberSumAggregateOutputType | null
    _min: CommunitySubscriberMinAggregateOutputType | null
    _max: CommunitySubscriberMaxAggregateOutputType | null
  }

  type GetCommunitySubscriberGroupByPayload<T extends CommunitySubscriberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommunitySubscriberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommunitySubscriberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommunitySubscriberGroupByOutputType[P]>
            : GetScalarType<T[P], CommunitySubscriberGroupByOutputType[P]>
        }
      >
    >


  export type CommunitySubscriberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    communityId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    community?: boolean | CommunityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["communitySubscriber"]>

  export type CommunitySubscriberSelectScalar = {
    id?: boolean
    userId?: boolean
    communityId?: boolean
  }

  export type CommunitySubscriberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    community?: boolean | CommunityDefaultArgs<ExtArgs>
  }


  export type $CommunitySubscriberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CommunitySubscriber"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      community: Prisma.$CommunityPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      communityId: number
    }, ExtArgs["result"]["communitySubscriber"]>
    composites: {}
  }


  type CommunitySubscriberGetPayload<S extends boolean | null | undefined | CommunitySubscriberDefaultArgs> = $Result.GetResult<Prisma.$CommunitySubscriberPayload, S>

  type CommunitySubscriberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CommunitySubscriberFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: CommunitySubscriberCountAggregateInputType | true
    }

  export interface CommunitySubscriberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CommunitySubscriber'], meta: { name: 'CommunitySubscriber' } }
    /**
     * Find zero or one CommunitySubscriber that matches the filter.
     * @param {CommunitySubscriberFindUniqueArgs} args - Arguments to find a CommunitySubscriber
     * @example
     * // Get one CommunitySubscriber
     * const communitySubscriber = await prisma.communitySubscriber.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CommunitySubscriberFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CommunitySubscriberFindUniqueArgs<ExtArgs>>
    ): Prisma__CommunitySubscriberClient<$Result.GetResult<Prisma.$CommunitySubscriberPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one CommunitySubscriber that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CommunitySubscriberFindUniqueOrThrowArgs} args - Arguments to find a CommunitySubscriber
     * @example
     * // Get one CommunitySubscriber
     * const communitySubscriber = await prisma.communitySubscriber.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CommunitySubscriberFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CommunitySubscriberFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CommunitySubscriberClient<$Result.GetResult<Prisma.$CommunitySubscriberPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first CommunitySubscriber that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunitySubscriberFindFirstArgs} args - Arguments to find a CommunitySubscriber
     * @example
     * // Get one CommunitySubscriber
     * const communitySubscriber = await prisma.communitySubscriber.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CommunitySubscriberFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CommunitySubscriberFindFirstArgs<ExtArgs>>
    ): Prisma__CommunitySubscriberClient<$Result.GetResult<Prisma.$CommunitySubscriberPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first CommunitySubscriber that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunitySubscriberFindFirstOrThrowArgs} args - Arguments to find a CommunitySubscriber
     * @example
     * // Get one CommunitySubscriber
     * const communitySubscriber = await prisma.communitySubscriber.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CommunitySubscriberFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CommunitySubscriberFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CommunitySubscriberClient<$Result.GetResult<Prisma.$CommunitySubscriberPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more CommunitySubscribers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunitySubscriberFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CommunitySubscribers
     * const communitySubscribers = await prisma.communitySubscriber.findMany()
     * 
     * // Get first 10 CommunitySubscribers
     * const communitySubscribers = await prisma.communitySubscriber.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const communitySubscriberWithIdOnly = await prisma.communitySubscriber.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CommunitySubscriberFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CommunitySubscriberFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunitySubscriberPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a CommunitySubscriber.
     * @param {CommunitySubscriberCreateArgs} args - Arguments to create a CommunitySubscriber.
     * @example
     * // Create one CommunitySubscriber
     * const CommunitySubscriber = await prisma.communitySubscriber.create({
     *   data: {
     *     // ... data to create a CommunitySubscriber
     *   }
     * })
     * 
    **/
    create<T extends CommunitySubscriberCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CommunitySubscriberCreateArgs<ExtArgs>>
    ): Prisma__CommunitySubscriberClient<$Result.GetResult<Prisma.$CommunitySubscriberPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many CommunitySubscribers.
     *     @param {CommunitySubscriberCreateManyArgs} args - Arguments to create many CommunitySubscribers.
     *     @example
     *     // Create many CommunitySubscribers
     *     const communitySubscriber = await prisma.communitySubscriber.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CommunitySubscriberCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CommunitySubscriberCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CommunitySubscriber.
     * @param {CommunitySubscriberDeleteArgs} args - Arguments to delete one CommunitySubscriber.
     * @example
     * // Delete one CommunitySubscriber
     * const CommunitySubscriber = await prisma.communitySubscriber.delete({
     *   where: {
     *     // ... filter to delete one CommunitySubscriber
     *   }
     * })
     * 
    **/
    delete<T extends CommunitySubscriberDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CommunitySubscriberDeleteArgs<ExtArgs>>
    ): Prisma__CommunitySubscriberClient<$Result.GetResult<Prisma.$CommunitySubscriberPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one CommunitySubscriber.
     * @param {CommunitySubscriberUpdateArgs} args - Arguments to update one CommunitySubscriber.
     * @example
     * // Update one CommunitySubscriber
     * const communitySubscriber = await prisma.communitySubscriber.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CommunitySubscriberUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CommunitySubscriberUpdateArgs<ExtArgs>>
    ): Prisma__CommunitySubscriberClient<$Result.GetResult<Prisma.$CommunitySubscriberPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more CommunitySubscribers.
     * @param {CommunitySubscriberDeleteManyArgs} args - Arguments to filter CommunitySubscribers to delete.
     * @example
     * // Delete a few CommunitySubscribers
     * const { count } = await prisma.communitySubscriber.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CommunitySubscriberDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CommunitySubscriberDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommunitySubscribers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunitySubscriberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CommunitySubscribers
     * const communitySubscriber = await prisma.communitySubscriber.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CommunitySubscriberUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CommunitySubscriberUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CommunitySubscriber.
     * @param {CommunitySubscriberUpsertArgs} args - Arguments to update or create a CommunitySubscriber.
     * @example
     * // Update or create a CommunitySubscriber
     * const communitySubscriber = await prisma.communitySubscriber.upsert({
     *   create: {
     *     // ... data to create a CommunitySubscriber
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CommunitySubscriber we want to update
     *   }
     * })
    **/
    upsert<T extends CommunitySubscriberUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CommunitySubscriberUpsertArgs<ExtArgs>>
    ): Prisma__CommunitySubscriberClient<$Result.GetResult<Prisma.$CommunitySubscriberPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of CommunitySubscribers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunitySubscriberCountArgs} args - Arguments to filter CommunitySubscribers to count.
     * @example
     * // Count the number of CommunitySubscribers
     * const count = await prisma.communitySubscriber.count({
     *   where: {
     *     // ... the filter for the CommunitySubscribers we want to count
     *   }
     * })
    **/
    count<T extends CommunitySubscriberCountArgs>(
      args?: Subset<T, CommunitySubscriberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommunitySubscriberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CommunitySubscriber.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunitySubscriberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommunitySubscriberAggregateArgs>(args: Subset<T, CommunitySubscriberAggregateArgs>): Prisma.PrismaPromise<GetCommunitySubscriberAggregateType<T>>

    /**
     * Group by CommunitySubscriber.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunitySubscriberGroupByArgs} args - Group by arguments.
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
      T extends CommunitySubscriberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommunitySubscriberGroupByArgs['orderBy'] }
        : { orderBy?: CommunitySubscriberGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommunitySubscriberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommunitySubscriberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CommunitySubscriber model
   */
  readonly fields: CommunitySubscriberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CommunitySubscriber.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommunitySubscriberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    community<T extends CommunityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CommunityDefaultArgs<ExtArgs>>): Prisma__CommunityClient<$Result.GetResult<Prisma.$CommunityPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the CommunitySubscriber model
   */ 
  interface CommunitySubscriberFieldRefs {
    readonly id: FieldRef<"CommunitySubscriber", 'Int'>
    readonly userId: FieldRef<"CommunitySubscriber", 'Int'>
    readonly communityId: FieldRef<"CommunitySubscriber", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * CommunitySubscriber findUnique
   */
  export type CommunitySubscriberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunitySubscriber
     */
    select?: CommunitySubscriberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommunitySubscriberInclude<ExtArgs> | null
    /**
     * Filter, which CommunitySubscriber to fetch.
     */
    where: CommunitySubscriberWhereUniqueInput
  }


  /**
   * CommunitySubscriber findUniqueOrThrow
   */
  export type CommunitySubscriberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunitySubscriber
     */
    select?: CommunitySubscriberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommunitySubscriberInclude<ExtArgs> | null
    /**
     * Filter, which CommunitySubscriber to fetch.
     */
    where: CommunitySubscriberWhereUniqueInput
  }


  /**
   * CommunitySubscriber findFirst
   */
  export type CommunitySubscriberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunitySubscriber
     */
    select?: CommunitySubscriberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommunitySubscriberInclude<ExtArgs> | null
    /**
     * Filter, which CommunitySubscriber to fetch.
     */
    where?: CommunitySubscriberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunitySubscribers to fetch.
     */
    orderBy?: CommunitySubscriberOrderByWithRelationInput | CommunitySubscriberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommunitySubscribers.
     */
    cursor?: CommunitySubscriberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunitySubscribers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunitySubscribers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommunitySubscribers.
     */
    distinct?: CommunitySubscriberScalarFieldEnum | CommunitySubscriberScalarFieldEnum[]
  }


  /**
   * CommunitySubscriber findFirstOrThrow
   */
  export type CommunitySubscriberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunitySubscriber
     */
    select?: CommunitySubscriberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommunitySubscriberInclude<ExtArgs> | null
    /**
     * Filter, which CommunitySubscriber to fetch.
     */
    where?: CommunitySubscriberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunitySubscribers to fetch.
     */
    orderBy?: CommunitySubscriberOrderByWithRelationInput | CommunitySubscriberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommunitySubscribers.
     */
    cursor?: CommunitySubscriberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunitySubscribers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunitySubscribers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommunitySubscribers.
     */
    distinct?: CommunitySubscriberScalarFieldEnum | CommunitySubscriberScalarFieldEnum[]
  }


  /**
   * CommunitySubscriber findMany
   */
  export type CommunitySubscriberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunitySubscriber
     */
    select?: CommunitySubscriberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommunitySubscriberInclude<ExtArgs> | null
    /**
     * Filter, which CommunitySubscribers to fetch.
     */
    where?: CommunitySubscriberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunitySubscribers to fetch.
     */
    orderBy?: CommunitySubscriberOrderByWithRelationInput | CommunitySubscriberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CommunitySubscribers.
     */
    cursor?: CommunitySubscriberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunitySubscribers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunitySubscribers.
     */
    skip?: number
    distinct?: CommunitySubscriberScalarFieldEnum | CommunitySubscriberScalarFieldEnum[]
  }


  /**
   * CommunitySubscriber create
   */
  export type CommunitySubscriberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunitySubscriber
     */
    select?: CommunitySubscriberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommunitySubscriberInclude<ExtArgs> | null
    /**
     * The data needed to create a CommunitySubscriber.
     */
    data: XOR<CommunitySubscriberCreateInput, CommunitySubscriberUncheckedCreateInput>
  }


  /**
   * CommunitySubscriber createMany
   */
  export type CommunitySubscriberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CommunitySubscribers.
     */
    data: CommunitySubscriberCreateManyInput | CommunitySubscriberCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * CommunitySubscriber update
   */
  export type CommunitySubscriberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunitySubscriber
     */
    select?: CommunitySubscriberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommunitySubscriberInclude<ExtArgs> | null
    /**
     * The data needed to update a CommunitySubscriber.
     */
    data: XOR<CommunitySubscriberUpdateInput, CommunitySubscriberUncheckedUpdateInput>
    /**
     * Choose, which CommunitySubscriber to update.
     */
    where: CommunitySubscriberWhereUniqueInput
  }


  /**
   * CommunitySubscriber updateMany
   */
  export type CommunitySubscriberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CommunitySubscribers.
     */
    data: XOR<CommunitySubscriberUpdateManyMutationInput, CommunitySubscriberUncheckedUpdateManyInput>
    /**
     * Filter which CommunitySubscribers to update
     */
    where?: CommunitySubscriberWhereInput
  }


  /**
   * CommunitySubscriber upsert
   */
  export type CommunitySubscriberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunitySubscriber
     */
    select?: CommunitySubscriberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommunitySubscriberInclude<ExtArgs> | null
    /**
     * The filter to search for the CommunitySubscriber to update in case it exists.
     */
    where: CommunitySubscriberWhereUniqueInput
    /**
     * In case the CommunitySubscriber found by the `where` argument doesn't exist, create a new CommunitySubscriber with this data.
     */
    create: XOR<CommunitySubscriberCreateInput, CommunitySubscriberUncheckedCreateInput>
    /**
     * In case the CommunitySubscriber was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommunitySubscriberUpdateInput, CommunitySubscriberUncheckedUpdateInput>
  }


  /**
   * CommunitySubscriber delete
   */
  export type CommunitySubscriberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunitySubscriber
     */
    select?: CommunitySubscriberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommunitySubscriberInclude<ExtArgs> | null
    /**
     * Filter which CommunitySubscriber to delete.
     */
    where: CommunitySubscriberWhereUniqueInput
  }


  /**
   * CommunitySubscriber deleteMany
   */
  export type CommunitySubscriberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommunitySubscribers to delete
     */
    where?: CommunitySubscriberWhereInput
  }


  /**
   * CommunitySubscriber without action
   */
  export type CommunitySubscriberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunitySubscriber
     */
    select?: CommunitySubscriberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommunitySubscriberInclude<ExtArgs> | null
  }



  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentAvgAggregateOutputType = {
    id: number | null
    postId: number | null
    userId: number | null
    parentCommentId: number | null
  }

  export type CommentSumAggregateOutputType = {
    id: number | null
    postId: number | null
    userId: number | null
    parentCommentId: number | null
  }

  export type CommentMinAggregateOutputType = {
    id: number | null
    postId: number | null
    userId: number | null
    content: string | null
    parentCommentId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommentMaxAggregateOutputType = {
    id: number | null
    postId: number | null
    userId: number | null
    content: string | null
    parentCommentId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    postId: number
    userId: number
    content: number
    parentCommentId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CommentAvgAggregateInputType = {
    id?: true
    postId?: true
    userId?: true
    parentCommentId?: true
  }

  export type CommentSumAggregateInputType = {
    id?: true
    postId?: true
    userId?: true
    parentCommentId?: true
  }

  export type CommentMinAggregateInputType = {
    id?: true
    postId?: true
    userId?: true
    content?: true
    parentCommentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    postId?: true
    userId?: true
    content?: true
    parentCommentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    postId?: true
    userId?: true
    content?: true
    parentCommentId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _avg?: CommentAvgAggregateInputType
    _sum?: CommentSumAggregateInputType
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: number
    postId: number
    userId: number
    content: string
    parentCommentId: number
    createdAt: Date
    updatedAt: Date
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    userId?: boolean
    content?: boolean
    parentCommentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parent?: boolean | Comment$parentArgs<ExtArgs>
    commentVote?: boolean | Comment$commentVoteArgs<ExtArgs>
    _count?: boolean | CommentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectScalar = {
    id?: boolean
    postId?: boolean
    userId?: boolean
    content?: boolean
    parentCommentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Comment$parentArgs<ExtArgs>
    commentVote?: boolean | Comment$commentVoteArgs<ExtArgs>
    _count?: boolean | CommentCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      parent: Prisma.$CommentParentChildrenPayload<ExtArgs>[]
      commentVote: Prisma.$CommentVotePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      postId: number
      userId: number
      content: string
      parentCommentId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }


  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CommentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>
    ): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Comment that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CommentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>
    ): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CommentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
    **/
    create<T extends CommentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CommentCreateArgs<ExtArgs>>
    ): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Comments.
     *     @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     *     @example
     *     // Create many Comments
     *     const comment = await prisma.comment.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CommentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
    **/
    delete<T extends CommentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>
    ): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CommentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>
    ): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CommentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CommentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
    **/
    upsert<T extends CommentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>
    ): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
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
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    parent<T extends Comment$parentArgs<ExtArgs> = {}>(args?: Subset<T, Comment$parentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentParentChildrenPayload<ExtArgs>, T, 'findMany'> | Null>;

    commentVote<T extends Comment$commentVoteArgs<ExtArgs> = {}>(args?: Subset<T, Comment$commentVoteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentVotePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Comment model
   */ 
  interface CommentFieldRefs {
    readonly id: FieldRef<"Comment", 'Int'>
    readonly postId: FieldRef<"Comment", 'Int'>
    readonly userId: FieldRef<"Comment", 'Int'>
    readonly content: FieldRef<"Comment", 'String'>
    readonly parentCommentId: FieldRef<"Comment", 'Int'>
    readonly createdAt: FieldRef<"Comment", 'DateTime'>
    readonly updatedAt: FieldRef<"Comment", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }


  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }


  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }


  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }


  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }


  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }


  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }


  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
  }


  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }


  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }


  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
  }


  /**
   * Comment.parent
   */
  export type Comment$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentParentChildren
     */
    select?: CommentParentChildrenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentParentChildrenInclude<ExtArgs> | null
    where?: CommentParentChildrenWhereInput
    orderBy?: CommentParentChildrenOrderByWithRelationInput | CommentParentChildrenOrderByWithRelationInput[]
    cursor?: CommentParentChildrenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentParentChildrenScalarFieldEnum | CommentParentChildrenScalarFieldEnum[]
  }


  /**
   * Comment.commentVote
   */
  export type Comment$commentVoteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentVote
     */
    select?: CommentVoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentVoteInclude<ExtArgs> | null
    where?: CommentVoteWhereInput
    orderBy?: CommentVoteOrderByWithRelationInput | CommentVoteOrderByWithRelationInput[]
    cursor?: CommentVoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentVoteScalarFieldEnum | CommentVoteScalarFieldEnum[]
  }


  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
  }



  /**
   * Model CommentVote
   */

  export type AggregateCommentVote = {
    _count: CommentVoteCountAggregateOutputType | null
    _avg: CommentVoteAvgAggregateOutputType | null
    _sum: CommentVoteSumAggregateOutputType | null
    _min: CommentVoteMinAggregateOutputType | null
    _max: CommentVoteMaxAggregateOutputType | null
  }

  export type CommentVoteAvgAggregateOutputType = {
    id: number | null
    commentId: number | null
    userId: number | null
  }

  export type CommentVoteSumAggregateOutputType = {
    id: number | null
    commentId: number | null
    userId: number | null
  }

  export type CommentVoteMinAggregateOutputType = {
    id: number | null
    upvote: boolean | null
    downvot: boolean | null
    commentId: number | null
    userId: number | null
  }

  export type CommentVoteMaxAggregateOutputType = {
    id: number | null
    upvote: boolean | null
    downvot: boolean | null
    commentId: number | null
    userId: number | null
  }

  export type CommentVoteCountAggregateOutputType = {
    id: number
    upvote: number
    downvot: number
    commentId: number
    userId: number
    _all: number
  }


  export type CommentVoteAvgAggregateInputType = {
    id?: true
    commentId?: true
    userId?: true
  }

  export type CommentVoteSumAggregateInputType = {
    id?: true
    commentId?: true
    userId?: true
  }

  export type CommentVoteMinAggregateInputType = {
    id?: true
    upvote?: true
    downvot?: true
    commentId?: true
    userId?: true
  }

  export type CommentVoteMaxAggregateInputType = {
    id?: true
    upvote?: true
    downvot?: true
    commentId?: true
    userId?: true
  }

  export type CommentVoteCountAggregateInputType = {
    id?: true
    upvote?: true
    downvot?: true
    commentId?: true
    userId?: true
    _all?: true
  }

  export type CommentVoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommentVote to aggregate.
     */
    where?: CommentVoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommentVotes to fetch.
     */
    orderBy?: CommentVoteOrderByWithRelationInput | CommentVoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentVoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommentVotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommentVotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CommentVotes
    **/
    _count?: true | CommentVoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentVoteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentVoteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentVoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentVoteMaxAggregateInputType
  }

  export type GetCommentVoteAggregateType<T extends CommentVoteAggregateArgs> = {
        [P in keyof T & keyof AggregateCommentVote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommentVote[P]>
      : GetScalarType<T[P], AggregateCommentVote[P]>
  }




  export type CommentVoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentVoteWhereInput
    orderBy?: CommentVoteOrderByWithAggregationInput | CommentVoteOrderByWithAggregationInput[]
    by: CommentVoteScalarFieldEnum[] | CommentVoteScalarFieldEnum
    having?: CommentVoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentVoteCountAggregateInputType | true
    _avg?: CommentVoteAvgAggregateInputType
    _sum?: CommentVoteSumAggregateInputType
    _min?: CommentVoteMinAggregateInputType
    _max?: CommentVoteMaxAggregateInputType
  }

  export type CommentVoteGroupByOutputType = {
    id: number
    upvote: boolean
    downvot: boolean
    commentId: number
    userId: number
    _count: CommentVoteCountAggregateOutputType | null
    _avg: CommentVoteAvgAggregateOutputType | null
    _sum: CommentVoteSumAggregateOutputType | null
    _min: CommentVoteMinAggregateOutputType | null
    _max: CommentVoteMaxAggregateOutputType | null
  }

  type GetCommentVoteGroupByPayload<T extends CommentVoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentVoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentVoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentVoteGroupByOutputType[P]>
            : GetScalarType<T[P], CommentVoteGroupByOutputType[P]>
        }
      >
    >


  export type CommentVoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    upvote?: boolean
    downvot?: boolean
    commentId?: boolean
    userId?: boolean
    comment?: boolean | CommentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["commentVote"]>

  export type CommentVoteSelectScalar = {
    id?: boolean
    upvote?: boolean
    downvot?: boolean
    commentId?: boolean
    userId?: boolean
  }

  export type CommentVoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comment?: boolean | CommentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $CommentVotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CommentVote"
    objects: {
      comment: Prisma.$CommentPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      upvote: boolean
      downvot: boolean
      commentId: number
      userId: number
    }, ExtArgs["result"]["commentVote"]>
    composites: {}
  }


  type CommentVoteGetPayload<S extends boolean | null | undefined | CommentVoteDefaultArgs> = $Result.GetResult<Prisma.$CommentVotePayload, S>

  type CommentVoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CommentVoteFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: CommentVoteCountAggregateInputType | true
    }

  export interface CommentVoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CommentVote'], meta: { name: 'CommentVote' } }
    /**
     * Find zero or one CommentVote that matches the filter.
     * @param {CommentVoteFindUniqueArgs} args - Arguments to find a CommentVote
     * @example
     * // Get one CommentVote
     * const commentVote = await prisma.commentVote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CommentVoteFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CommentVoteFindUniqueArgs<ExtArgs>>
    ): Prisma__CommentVoteClient<$Result.GetResult<Prisma.$CommentVotePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one CommentVote that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CommentVoteFindUniqueOrThrowArgs} args - Arguments to find a CommentVote
     * @example
     * // Get one CommentVote
     * const commentVote = await prisma.commentVote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CommentVoteFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentVoteFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CommentVoteClient<$Result.GetResult<Prisma.$CommentVotePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first CommentVote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentVoteFindFirstArgs} args - Arguments to find a CommentVote
     * @example
     * // Get one CommentVote
     * const commentVote = await prisma.commentVote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CommentVoteFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentVoteFindFirstArgs<ExtArgs>>
    ): Prisma__CommentVoteClient<$Result.GetResult<Prisma.$CommentVotePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first CommentVote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentVoteFindFirstOrThrowArgs} args - Arguments to find a CommentVote
     * @example
     * // Get one CommentVote
     * const commentVote = await prisma.commentVote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CommentVoteFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentVoteFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CommentVoteClient<$Result.GetResult<Prisma.$CommentVotePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more CommentVotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentVoteFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CommentVotes
     * const commentVotes = await prisma.commentVote.findMany()
     * 
     * // Get first 10 CommentVotes
     * const commentVotes = await prisma.commentVote.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentVoteWithIdOnly = await prisma.commentVote.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CommentVoteFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentVoteFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentVotePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a CommentVote.
     * @param {CommentVoteCreateArgs} args - Arguments to create a CommentVote.
     * @example
     * // Create one CommentVote
     * const CommentVote = await prisma.commentVote.create({
     *   data: {
     *     // ... data to create a CommentVote
     *   }
     * })
     * 
    **/
    create<T extends CommentVoteCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CommentVoteCreateArgs<ExtArgs>>
    ): Prisma__CommentVoteClient<$Result.GetResult<Prisma.$CommentVotePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many CommentVotes.
     *     @param {CommentVoteCreateManyArgs} args - Arguments to create many CommentVotes.
     *     @example
     *     // Create many CommentVotes
     *     const commentVote = await prisma.commentVote.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CommentVoteCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentVoteCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CommentVote.
     * @param {CommentVoteDeleteArgs} args - Arguments to delete one CommentVote.
     * @example
     * // Delete one CommentVote
     * const CommentVote = await prisma.commentVote.delete({
     *   where: {
     *     // ... filter to delete one CommentVote
     *   }
     * })
     * 
    **/
    delete<T extends CommentVoteDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CommentVoteDeleteArgs<ExtArgs>>
    ): Prisma__CommentVoteClient<$Result.GetResult<Prisma.$CommentVotePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one CommentVote.
     * @param {CommentVoteUpdateArgs} args - Arguments to update one CommentVote.
     * @example
     * // Update one CommentVote
     * const commentVote = await prisma.commentVote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CommentVoteUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CommentVoteUpdateArgs<ExtArgs>>
    ): Prisma__CommentVoteClient<$Result.GetResult<Prisma.$CommentVotePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more CommentVotes.
     * @param {CommentVoteDeleteManyArgs} args - Arguments to filter CommentVotes to delete.
     * @example
     * // Delete a few CommentVotes
     * const { count } = await prisma.commentVote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CommentVoteDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentVoteDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommentVotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentVoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CommentVotes
     * const commentVote = await prisma.commentVote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CommentVoteUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CommentVoteUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CommentVote.
     * @param {CommentVoteUpsertArgs} args - Arguments to update or create a CommentVote.
     * @example
     * // Update or create a CommentVote
     * const commentVote = await prisma.commentVote.upsert({
     *   create: {
     *     // ... data to create a CommentVote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CommentVote we want to update
     *   }
     * })
    **/
    upsert<T extends CommentVoteUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CommentVoteUpsertArgs<ExtArgs>>
    ): Prisma__CommentVoteClient<$Result.GetResult<Prisma.$CommentVotePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of CommentVotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentVoteCountArgs} args - Arguments to filter CommentVotes to count.
     * @example
     * // Count the number of CommentVotes
     * const count = await prisma.commentVote.count({
     *   where: {
     *     // ... the filter for the CommentVotes we want to count
     *   }
     * })
    **/
    count<T extends CommentVoteCountArgs>(
      args?: Subset<T, CommentVoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentVoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CommentVote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentVoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommentVoteAggregateArgs>(args: Subset<T, CommentVoteAggregateArgs>): Prisma.PrismaPromise<GetCommentVoteAggregateType<T>>

    /**
     * Group by CommentVote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentVoteGroupByArgs} args - Group by arguments.
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
      T extends CommentVoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentVoteGroupByArgs['orderBy'] }
        : { orderBy?: CommentVoteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommentVoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentVoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CommentVote model
   */
  readonly fields: CommentVoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CommentVote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentVoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    comment<T extends CommentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CommentDefaultArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the CommentVote model
   */ 
  interface CommentVoteFieldRefs {
    readonly id: FieldRef<"CommentVote", 'Int'>
    readonly upvote: FieldRef<"CommentVote", 'Boolean'>
    readonly downvot: FieldRef<"CommentVote", 'Boolean'>
    readonly commentId: FieldRef<"CommentVote", 'Int'>
    readonly userId: FieldRef<"CommentVote", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * CommentVote findUnique
   */
  export type CommentVoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentVote
     */
    select?: CommentVoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentVoteInclude<ExtArgs> | null
    /**
     * Filter, which CommentVote to fetch.
     */
    where: CommentVoteWhereUniqueInput
  }


  /**
   * CommentVote findUniqueOrThrow
   */
  export type CommentVoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentVote
     */
    select?: CommentVoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentVoteInclude<ExtArgs> | null
    /**
     * Filter, which CommentVote to fetch.
     */
    where: CommentVoteWhereUniqueInput
  }


  /**
   * CommentVote findFirst
   */
  export type CommentVoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentVote
     */
    select?: CommentVoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentVoteInclude<ExtArgs> | null
    /**
     * Filter, which CommentVote to fetch.
     */
    where?: CommentVoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommentVotes to fetch.
     */
    orderBy?: CommentVoteOrderByWithRelationInput | CommentVoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommentVotes.
     */
    cursor?: CommentVoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommentVotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommentVotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommentVotes.
     */
    distinct?: CommentVoteScalarFieldEnum | CommentVoteScalarFieldEnum[]
  }


  /**
   * CommentVote findFirstOrThrow
   */
  export type CommentVoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentVote
     */
    select?: CommentVoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentVoteInclude<ExtArgs> | null
    /**
     * Filter, which CommentVote to fetch.
     */
    where?: CommentVoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommentVotes to fetch.
     */
    orderBy?: CommentVoteOrderByWithRelationInput | CommentVoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommentVotes.
     */
    cursor?: CommentVoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommentVotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommentVotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommentVotes.
     */
    distinct?: CommentVoteScalarFieldEnum | CommentVoteScalarFieldEnum[]
  }


  /**
   * CommentVote findMany
   */
  export type CommentVoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentVote
     */
    select?: CommentVoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentVoteInclude<ExtArgs> | null
    /**
     * Filter, which CommentVotes to fetch.
     */
    where?: CommentVoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommentVotes to fetch.
     */
    orderBy?: CommentVoteOrderByWithRelationInput | CommentVoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CommentVotes.
     */
    cursor?: CommentVoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommentVotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommentVotes.
     */
    skip?: number
    distinct?: CommentVoteScalarFieldEnum | CommentVoteScalarFieldEnum[]
  }


  /**
   * CommentVote create
   */
  export type CommentVoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentVote
     */
    select?: CommentVoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentVoteInclude<ExtArgs> | null
    /**
     * The data needed to create a CommentVote.
     */
    data: XOR<CommentVoteCreateInput, CommentVoteUncheckedCreateInput>
  }


  /**
   * CommentVote createMany
   */
  export type CommentVoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CommentVotes.
     */
    data: CommentVoteCreateManyInput | CommentVoteCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * CommentVote update
   */
  export type CommentVoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentVote
     */
    select?: CommentVoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentVoteInclude<ExtArgs> | null
    /**
     * The data needed to update a CommentVote.
     */
    data: XOR<CommentVoteUpdateInput, CommentVoteUncheckedUpdateInput>
    /**
     * Choose, which CommentVote to update.
     */
    where: CommentVoteWhereUniqueInput
  }


  /**
   * CommentVote updateMany
   */
  export type CommentVoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CommentVotes.
     */
    data: XOR<CommentVoteUpdateManyMutationInput, CommentVoteUncheckedUpdateManyInput>
    /**
     * Filter which CommentVotes to update
     */
    where?: CommentVoteWhereInput
  }


  /**
   * CommentVote upsert
   */
  export type CommentVoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentVote
     */
    select?: CommentVoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentVoteInclude<ExtArgs> | null
    /**
     * The filter to search for the CommentVote to update in case it exists.
     */
    where: CommentVoteWhereUniqueInput
    /**
     * In case the CommentVote found by the `where` argument doesn't exist, create a new CommentVote with this data.
     */
    create: XOR<CommentVoteCreateInput, CommentVoteUncheckedCreateInput>
    /**
     * In case the CommentVote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentVoteUpdateInput, CommentVoteUncheckedUpdateInput>
  }


  /**
   * CommentVote delete
   */
  export type CommentVoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentVote
     */
    select?: CommentVoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentVoteInclude<ExtArgs> | null
    /**
     * Filter which CommentVote to delete.
     */
    where: CommentVoteWhereUniqueInput
  }


  /**
   * CommentVote deleteMany
   */
  export type CommentVoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommentVotes to delete
     */
    where?: CommentVoteWhereInput
  }


  /**
   * CommentVote without action
   */
  export type CommentVoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentVote
     */
    select?: CommentVoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentVoteInclude<ExtArgs> | null
  }



  /**
   * Model CommentParentChildren
   */

  export type AggregateCommentParentChildren = {
    _count: CommentParentChildrenCountAggregateOutputType | null
    _avg: CommentParentChildrenAvgAggregateOutputType | null
    _sum: CommentParentChildrenSumAggregateOutputType | null
    _min: CommentParentChildrenMinAggregateOutputType | null
    _max: CommentParentChildrenMaxAggregateOutputType | null
  }

  export type CommentParentChildrenAvgAggregateOutputType = {
    id: number | null
    commentId: number | null
    parentCommentId: number | null
  }

  export type CommentParentChildrenSumAggregateOutputType = {
    id: number | null
    commentId: number | null
    parentCommentId: number | null
  }

  export type CommentParentChildrenMinAggregateOutputType = {
    id: number | null
    commentId: number | null
    parentCommentId: number | null
  }

  export type CommentParentChildrenMaxAggregateOutputType = {
    id: number | null
    commentId: number | null
    parentCommentId: number | null
  }

  export type CommentParentChildrenCountAggregateOutputType = {
    id: number
    commentId: number
    parentCommentId: number
    _all: number
  }


  export type CommentParentChildrenAvgAggregateInputType = {
    id?: true
    commentId?: true
    parentCommentId?: true
  }

  export type CommentParentChildrenSumAggregateInputType = {
    id?: true
    commentId?: true
    parentCommentId?: true
  }

  export type CommentParentChildrenMinAggregateInputType = {
    id?: true
    commentId?: true
    parentCommentId?: true
  }

  export type CommentParentChildrenMaxAggregateInputType = {
    id?: true
    commentId?: true
    parentCommentId?: true
  }

  export type CommentParentChildrenCountAggregateInputType = {
    id?: true
    commentId?: true
    parentCommentId?: true
    _all?: true
  }

  export type CommentParentChildrenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommentParentChildren to aggregate.
     */
    where?: CommentParentChildrenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommentParentChildren to fetch.
     */
    orderBy?: CommentParentChildrenOrderByWithRelationInput | CommentParentChildrenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentParentChildrenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommentParentChildren from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommentParentChildren.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CommentParentChildren
    **/
    _count?: true | CommentParentChildrenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentParentChildrenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentParentChildrenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentParentChildrenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentParentChildrenMaxAggregateInputType
  }

  export type GetCommentParentChildrenAggregateType<T extends CommentParentChildrenAggregateArgs> = {
        [P in keyof T & keyof AggregateCommentParentChildren]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommentParentChildren[P]>
      : GetScalarType<T[P], AggregateCommentParentChildren[P]>
  }




  export type CommentParentChildrenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentParentChildrenWhereInput
    orderBy?: CommentParentChildrenOrderByWithAggregationInput | CommentParentChildrenOrderByWithAggregationInput[]
    by: CommentParentChildrenScalarFieldEnum[] | CommentParentChildrenScalarFieldEnum
    having?: CommentParentChildrenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentParentChildrenCountAggregateInputType | true
    _avg?: CommentParentChildrenAvgAggregateInputType
    _sum?: CommentParentChildrenSumAggregateInputType
    _min?: CommentParentChildrenMinAggregateInputType
    _max?: CommentParentChildrenMaxAggregateInputType
  }

  export type CommentParentChildrenGroupByOutputType = {
    id: number
    commentId: number
    parentCommentId: number
    _count: CommentParentChildrenCountAggregateOutputType | null
    _avg: CommentParentChildrenAvgAggregateOutputType | null
    _sum: CommentParentChildrenSumAggregateOutputType | null
    _min: CommentParentChildrenMinAggregateOutputType | null
    _max: CommentParentChildrenMaxAggregateOutputType | null
  }

  type GetCommentParentChildrenGroupByPayload<T extends CommentParentChildrenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentParentChildrenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentParentChildrenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentParentChildrenGroupByOutputType[P]>
            : GetScalarType<T[P], CommentParentChildrenGroupByOutputType[P]>
        }
      >
    >


  export type CommentParentChildrenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    commentId?: boolean
    parentCommentId?: boolean
    parent?: boolean | CommentParentChildren$parentArgs<ExtArgs>
  }, ExtArgs["result"]["commentParentChildren"]>

  export type CommentParentChildrenSelectScalar = {
    id?: boolean
    commentId?: boolean
    parentCommentId?: boolean
  }

  export type CommentParentChildrenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | CommentParentChildren$parentArgs<ExtArgs>
  }


  export type $CommentParentChildrenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CommentParentChildren"
    objects: {
      parent: Prisma.$CommentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      commentId: number
      parentCommentId: number
    }, ExtArgs["result"]["commentParentChildren"]>
    composites: {}
  }


  type CommentParentChildrenGetPayload<S extends boolean | null | undefined | CommentParentChildrenDefaultArgs> = $Result.GetResult<Prisma.$CommentParentChildrenPayload, S>

  type CommentParentChildrenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CommentParentChildrenFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: CommentParentChildrenCountAggregateInputType | true
    }

  export interface CommentParentChildrenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CommentParentChildren'], meta: { name: 'CommentParentChildren' } }
    /**
     * Find zero or one CommentParentChildren that matches the filter.
     * @param {CommentParentChildrenFindUniqueArgs} args - Arguments to find a CommentParentChildren
     * @example
     * // Get one CommentParentChildren
     * const commentParentChildren = await prisma.commentParentChildren.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CommentParentChildrenFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CommentParentChildrenFindUniqueArgs<ExtArgs>>
    ): Prisma__CommentParentChildrenClient<$Result.GetResult<Prisma.$CommentParentChildrenPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one CommentParentChildren that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CommentParentChildrenFindUniqueOrThrowArgs} args - Arguments to find a CommentParentChildren
     * @example
     * // Get one CommentParentChildren
     * const commentParentChildren = await prisma.commentParentChildren.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CommentParentChildrenFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentParentChildrenFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CommentParentChildrenClient<$Result.GetResult<Prisma.$CommentParentChildrenPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first CommentParentChildren that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentParentChildrenFindFirstArgs} args - Arguments to find a CommentParentChildren
     * @example
     * // Get one CommentParentChildren
     * const commentParentChildren = await prisma.commentParentChildren.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CommentParentChildrenFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentParentChildrenFindFirstArgs<ExtArgs>>
    ): Prisma__CommentParentChildrenClient<$Result.GetResult<Prisma.$CommentParentChildrenPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first CommentParentChildren that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentParentChildrenFindFirstOrThrowArgs} args - Arguments to find a CommentParentChildren
     * @example
     * // Get one CommentParentChildren
     * const commentParentChildren = await prisma.commentParentChildren.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CommentParentChildrenFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentParentChildrenFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CommentParentChildrenClient<$Result.GetResult<Prisma.$CommentParentChildrenPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more CommentParentChildren that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentParentChildrenFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CommentParentChildren
     * const commentParentChildren = await prisma.commentParentChildren.findMany()
     * 
     * // Get first 10 CommentParentChildren
     * const commentParentChildren = await prisma.commentParentChildren.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentParentChildrenWithIdOnly = await prisma.commentParentChildren.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CommentParentChildrenFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentParentChildrenFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentParentChildrenPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a CommentParentChildren.
     * @param {CommentParentChildrenCreateArgs} args - Arguments to create a CommentParentChildren.
     * @example
     * // Create one CommentParentChildren
     * const CommentParentChildren = await prisma.commentParentChildren.create({
     *   data: {
     *     // ... data to create a CommentParentChildren
     *   }
     * })
     * 
    **/
    create<T extends CommentParentChildrenCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CommentParentChildrenCreateArgs<ExtArgs>>
    ): Prisma__CommentParentChildrenClient<$Result.GetResult<Prisma.$CommentParentChildrenPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many CommentParentChildren.
     *     @param {CommentParentChildrenCreateManyArgs} args - Arguments to create many CommentParentChildren.
     *     @example
     *     // Create many CommentParentChildren
     *     const commentParentChildren = await prisma.commentParentChildren.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CommentParentChildrenCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentParentChildrenCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CommentParentChildren.
     * @param {CommentParentChildrenDeleteArgs} args - Arguments to delete one CommentParentChildren.
     * @example
     * // Delete one CommentParentChildren
     * const CommentParentChildren = await prisma.commentParentChildren.delete({
     *   where: {
     *     // ... filter to delete one CommentParentChildren
     *   }
     * })
     * 
    **/
    delete<T extends CommentParentChildrenDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CommentParentChildrenDeleteArgs<ExtArgs>>
    ): Prisma__CommentParentChildrenClient<$Result.GetResult<Prisma.$CommentParentChildrenPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one CommentParentChildren.
     * @param {CommentParentChildrenUpdateArgs} args - Arguments to update one CommentParentChildren.
     * @example
     * // Update one CommentParentChildren
     * const commentParentChildren = await prisma.commentParentChildren.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CommentParentChildrenUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CommentParentChildrenUpdateArgs<ExtArgs>>
    ): Prisma__CommentParentChildrenClient<$Result.GetResult<Prisma.$CommentParentChildrenPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more CommentParentChildren.
     * @param {CommentParentChildrenDeleteManyArgs} args - Arguments to filter CommentParentChildren to delete.
     * @example
     * // Delete a few CommentParentChildren
     * const { count } = await prisma.commentParentChildren.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CommentParentChildrenDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentParentChildrenDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommentParentChildren.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentParentChildrenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CommentParentChildren
     * const commentParentChildren = await prisma.commentParentChildren.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CommentParentChildrenUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CommentParentChildrenUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CommentParentChildren.
     * @param {CommentParentChildrenUpsertArgs} args - Arguments to update or create a CommentParentChildren.
     * @example
     * // Update or create a CommentParentChildren
     * const commentParentChildren = await prisma.commentParentChildren.upsert({
     *   create: {
     *     // ... data to create a CommentParentChildren
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CommentParentChildren we want to update
     *   }
     * })
    **/
    upsert<T extends CommentParentChildrenUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CommentParentChildrenUpsertArgs<ExtArgs>>
    ): Prisma__CommentParentChildrenClient<$Result.GetResult<Prisma.$CommentParentChildrenPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of CommentParentChildren.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentParentChildrenCountArgs} args - Arguments to filter CommentParentChildren to count.
     * @example
     * // Count the number of CommentParentChildren
     * const count = await prisma.commentParentChildren.count({
     *   where: {
     *     // ... the filter for the CommentParentChildren we want to count
     *   }
     * })
    **/
    count<T extends CommentParentChildrenCountArgs>(
      args?: Subset<T, CommentParentChildrenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentParentChildrenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CommentParentChildren.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentParentChildrenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommentParentChildrenAggregateArgs>(args: Subset<T, CommentParentChildrenAggregateArgs>): Prisma.PrismaPromise<GetCommentParentChildrenAggregateType<T>>

    /**
     * Group by CommentParentChildren.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentParentChildrenGroupByArgs} args - Group by arguments.
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
      T extends CommentParentChildrenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentParentChildrenGroupByArgs['orderBy'] }
        : { orderBy?: CommentParentChildrenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommentParentChildrenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentParentChildrenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CommentParentChildren model
   */
  readonly fields: CommentParentChildrenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CommentParentChildren.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentParentChildrenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    parent<T extends CommentParentChildren$parentArgs<ExtArgs> = {}>(args?: Subset<T, CommentParentChildren$parentArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the CommentParentChildren model
   */ 
  interface CommentParentChildrenFieldRefs {
    readonly id: FieldRef<"CommentParentChildren", 'Int'>
    readonly commentId: FieldRef<"CommentParentChildren", 'Int'>
    readonly parentCommentId: FieldRef<"CommentParentChildren", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * CommentParentChildren findUnique
   */
  export type CommentParentChildrenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentParentChildren
     */
    select?: CommentParentChildrenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentParentChildrenInclude<ExtArgs> | null
    /**
     * Filter, which CommentParentChildren to fetch.
     */
    where: CommentParentChildrenWhereUniqueInput
  }


  /**
   * CommentParentChildren findUniqueOrThrow
   */
  export type CommentParentChildrenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentParentChildren
     */
    select?: CommentParentChildrenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentParentChildrenInclude<ExtArgs> | null
    /**
     * Filter, which CommentParentChildren to fetch.
     */
    where: CommentParentChildrenWhereUniqueInput
  }


  /**
   * CommentParentChildren findFirst
   */
  export type CommentParentChildrenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentParentChildren
     */
    select?: CommentParentChildrenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentParentChildrenInclude<ExtArgs> | null
    /**
     * Filter, which CommentParentChildren to fetch.
     */
    where?: CommentParentChildrenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommentParentChildren to fetch.
     */
    orderBy?: CommentParentChildrenOrderByWithRelationInput | CommentParentChildrenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommentParentChildren.
     */
    cursor?: CommentParentChildrenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommentParentChildren from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommentParentChildren.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommentParentChildren.
     */
    distinct?: CommentParentChildrenScalarFieldEnum | CommentParentChildrenScalarFieldEnum[]
  }


  /**
   * CommentParentChildren findFirstOrThrow
   */
  export type CommentParentChildrenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentParentChildren
     */
    select?: CommentParentChildrenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentParentChildrenInclude<ExtArgs> | null
    /**
     * Filter, which CommentParentChildren to fetch.
     */
    where?: CommentParentChildrenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommentParentChildren to fetch.
     */
    orderBy?: CommentParentChildrenOrderByWithRelationInput | CommentParentChildrenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommentParentChildren.
     */
    cursor?: CommentParentChildrenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommentParentChildren from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommentParentChildren.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommentParentChildren.
     */
    distinct?: CommentParentChildrenScalarFieldEnum | CommentParentChildrenScalarFieldEnum[]
  }


  /**
   * CommentParentChildren findMany
   */
  export type CommentParentChildrenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentParentChildren
     */
    select?: CommentParentChildrenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentParentChildrenInclude<ExtArgs> | null
    /**
     * Filter, which CommentParentChildren to fetch.
     */
    where?: CommentParentChildrenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommentParentChildren to fetch.
     */
    orderBy?: CommentParentChildrenOrderByWithRelationInput | CommentParentChildrenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CommentParentChildren.
     */
    cursor?: CommentParentChildrenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommentParentChildren from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommentParentChildren.
     */
    skip?: number
    distinct?: CommentParentChildrenScalarFieldEnum | CommentParentChildrenScalarFieldEnum[]
  }


  /**
   * CommentParentChildren create
   */
  export type CommentParentChildrenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentParentChildren
     */
    select?: CommentParentChildrenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentParentChildrenInclude<ExtArgs> | null
    /**
     * The data needed to create a CommentParentChildren.
     */
    data: XOR<CommentParentChildrenCreateInput, CommentParentChildrenUncheckedCreateInput>
  }


  /**
   * CommentParentChildren createMany
   */
  export type CommentParentChildrenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CommentParentChildren.
     */
    data: CommentParentChildrenCreateManyInput | CommentParentChildrenCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * CommentParentChildren update
   */
  export type CommentParentChildrenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentParentChildren
     */
    select?: CommentParentChildrenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentParentChildrenInclude<ExtArgs> | null
    /**
     * The data needed to update a CommentParentChildren.
     */
    data: XOR<CommentParentChildrenUpdateInput, CommentParentChildrenUncheckedUpdateInput>
    /**
     * Choose, which CommentParentChildren to update.
     */
    where: CommentParentChildrenWhereUniqueInput
  }


  /**
   * CommentParentChildren updateMany
   */
  export type CommentParentChildrenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CommentParentChildren.
     */
    data: XOR<CommentParentChildrenUpdateManyMutationInput, CommentParentChildrenUncheckedUpdateManyInput>
    /**
     * Filter which CommentParentChildren to update
     */
    where?: CommentParentChildrenWhereInput
  }


  /**
   * CommentParentChildren upsert
   */
  export type CommentParentChildrenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentParentChildren
     */
    select?: CommentParentChildrenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentParentChildrenInclude<ExtArgs> | null
    /**
     * The filter to search for the CommentParentChildren to update in case it exists.
     */
    where: CommentParentChildrenWhereUniqueInput
    /**
     * In case the CommentParentChildren found by the `where` argument doesn't exist, create a new CommentParentChildren with this data.
     */
    create: XOR<CommentParentChildrenCreateInput, CommentParentChildrenUncheckedCreateInput>
    /**
     * In case the CommentParentChildren was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentParentChildrenUpdateInput, CommentParentChildrenUncheckedUpdateInput>
  }


  /**
   * CommentParentChildren delete
   */
  export type CommentParentChildrenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentParentChildren
     */
    select?: CommentParentChildrenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentParentChildrenInclude<ExtArgs> | null
    /**
     * Filter which CommentParentChildren to delete.
     */
    where: CommentParentChildrenWhereUniqueInput
  }


  /**
   * CommentParentChildren deleteMany
   */
  export type CommentParentChildrenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommentParentChildren to delete
     */
    where?: CommentParentChildrenWhereInput
  }


  /**
   * CommentParentChildren.parent
   */
  export type CommentParentChildren$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
  }


  /**
   * CommentParentChildren without action
   */
  export type CommentParentChildrenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentParentChildren
     */
    select?: CommentParentChildrenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CommentParentChildrenInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    password: 'password',
    image: 'image',
    isAdmin: 'isAdmin'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    imageUrl: 'imageUrl',
    commentCount: 'commentCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    communityId: 'communityId'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const PostVoteScalarFieldEnum: {
    id: 'id',
    upvote: 'upvote',
    downvot: 'downvot',
    postId: 'postId',
    userId: 'userId'
  };

  export type PostVoteScalarFieldEnum = (typeof PostVoteScalarFieldEnum)[keyof typeof PostVoteScalarFieldEnum]


  export const CommunityScalarFieldEnum: {
    id: 'id',
    adminId: 'adminId',
    name: 'name',
    bio: 'bio',
    subscriberCount: 'subscriberCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CommunityScalarFieldEnum = (typeof CommunityScalarFieldEnum)[keyof typeof CommunityScalarFieldEnum]


  export const CommunitySubscriberScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    communityId: 'communityId'
  };

  export type CommunitySubscriberScalarFieldEnum = (typeof CommunitySubscriberScalarFieldEnum)[keyof typeof CommunitySubscriberScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    postId: 'postId',
    userId: 'userId',
    content: 'content',
    parentCommentId: 'parentCommentId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const CommentVoteScalarFieldEnum: {
    id: 'id',
    upvote: 'upvote',
    downvot: 'downvot',
    commentId: 'commentId',
    userId: 'userId'
  };

  export type CommentVoteScalarFieldEnum = (typeof CommentVoteScalarFieldEnum)[keyof typeof CommentVoteScalarFieldEnum]


  export const CommentParentChildrenScalarFieldEnum: {
    id: 'id',
    commentId: 'commentId',
    parentCommentId: 'parentCommentId'
  };

  export type CommentParentChildrenScalarFieldEnum = (typeof CommentParentChildrenScalarFieldEnum)[keyof typeof CommentParentChildrenScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    image?: StringNullableFilter<"User"> | string | null
    isAdmin?: BoolFilter<"User"> | boolean
    posts?: PostListRelationFilter
    communities?: CommunityListRelationFilter
    postVote?: PostVoteListRelationFilter
    communitySubscriber?: CommunitySubscriberListRelationFilter
    commentVote?: CommentVoteListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    image?: SortOrderInput | SortOrder
    isAdmin?: SortOrder
    posts?: PostOrderByRelationAggregateInput
    communities?: CommunityOrderByRelationAggregateInput
    postVote?: PostVoteOrderByRelationAggregateInput
    communitySubscriber?: CommunitySubscriberOrderByRelationAggregateInput
    commentVote?: CommentVoteOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    image?: StringNullableFilter<"User"> | string | null
    isAdmin?: BoolFilter<"User"> | boolean
    posts?: PostListRelationFilter
    communities?: CommunityListRelationFilter
    postVote?: PostVoteListRelationFilter
    communitySubscriber?: CommunitySubscriberListRelationFilter
    commentVote?: CommentVoteListRelationFilter
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    image?: SortOrderInput | SortOrder
    isAdmin?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    isAdmin?: BoolWithAggregatesFilter<"User"> | boolean
  }

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: IntFilter<"Post"> | number
    title?: StringFilter<"Post"> | string
    content?: StringFilter<"Post"> | string
    imageUrl?: StringNullableFilter<"Post"> | string | null
    commentCount?: IntFilter<"Post"> | number
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    userId?: IntFilter<"Post"> | number
    communityId?: IntFilter<"Post"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    community?: XOR<CommunityRelationFilter, CommunityWhereInput>
    postVote?: PostVoteListRelationFilter
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    commentCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    communityId?: SortOrder
    user?: UserOrderByWithRelationInput
    community?: CommunityOrderByWithRelationInput
    postVote?: PostVoteOrderByRelationAggregateInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    title?: string
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    content?: StringFilter<"Post"> | string
    imageUrl?: StringNullableFilter<"Post"> | string | null
    commentCount?: IntFilter<"Post"> | number
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    userId?: IntFilter<"Post"> | number
    communityId?: IntFilter<"Post"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    community?: XOR<CommunityRelationFilter, CommunityWhereInput>
    postVote?: PostVoteListRelationFilter
  }, "id" | "title">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    commentCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    communityId?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _avg?: PostAvgOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
    _sum?: PostSumOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Post"> | number
    title?: StringWithAggregatesFilter<"Post"> | string
    content?: StringWithAggregatesFilter<"Post"> | string
    imageUrl?: StringNullableWithAggregatesFilter<"Post"> | string | null
    commentCount?: IntWithAggregatesFilter<"Post"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    userId?: IntWithAggregatesFilter<"Post"> | number
    communityId?: IntWithAggregatesFilter<"Post"> | number
  }

  export type PostVoteWhereInput = {
    AND?: PostVoteWhereInput | PostVoteWhereInput[]
    OR?: PostVoteWhereInput[]
    NOT?: PostVoteWhereInput | PostVoteWhereInput[]
    id?: IntFilter<"PostVote"> | number
    upvote?: BoolFilter<"PostVote"> | boolean
    downvot?: BoolFilter<"PostVote"> | boolean
    postId?: IntFilter<"PostVote"> | number
    userId?: IntFilter<"PostVote"> | number
    post?: XOR<PostRelationFilter, PostWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type PostVoteOrderByWithRelationInput = {
    id?: SortOrder
    upvote?: SortOrder
    downvot?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    post?: PostOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type PostVoteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PostVoteWhereInput | PostVoteWhereInput[]
    OR?: PostVoteWhereInput[]
    NOT?: PostVoteWhereInput | PostVoteWhereInput[]
    upvote?: BoolFilter<"PostVote"> | boolean
    downvot?: BoolFilter<"PostVote"> | boolean
    postId?: IntFilter<"PostVote"> | number
    userId?: IntFilter<"PostVote"> | number
    post?: XOR<PostRelationFilter, PostWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type PostVoteOrderByWithAggregationInput = {
    id?: SortOrder
    upvote?: SortOrder
    downvot?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    _count?: PostVoteCountOrderByAggregateInput
    _avg?: PostVoteAvgOrderByAggregateInput
    _max?: PostVoteMaxOrderByAggregateInput
    _min?: PostVoteMinOrderByAggregateInput
    _sum?: PostVoteSumOrderByAggregateInput
  }

  export type PostVoteScalarWhereWithAggregatesInput = {
    AND?: PostVoteScalarWhereWithAggregatesInput | PostVoteScalarWhereWithAggregatesInput[]
    OR?: PostVoteScalarWhereWithAggregatesInput[]
    NOT?: PostVoteScalarWhereWithAggregatesInput | PostVoteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PostVote"> | number
    upvote?: BoolWithAggregatesFilter<"PostVote"> | boolean
    downvot?: BoolWithAggregatesFilter<"PostVote"> | boolean
    postId?: IntWithAggregatesFilter<"PostVote"> | number
    userId?: IntWithAggregatesFilter<"PostVote"> | number
  }

  export type CommunityWhereInput = {
    AND?: CommunityWhereInput | CommunityWhereInput[]
    OR?: CommunityWhereInput[]
    NOT?: CommunityWhereInput | CommunityWhereInput[]
    id?: IntFilter<"Community"> | number
    adminId?: IntFilter<"Community"> | number
    name?: StringFilter<"Community"> | string
    bio?: StringFilter<"Community"> | string
    subscriberCount?: IntFilter<"Community"> | number
    createdAt?: DateTimeFilter<"Community"> | Date | string
    updatedAt?: DateTimeFilter<"Community"> | Date | string
    admin?: XOR<UserRelationFilter, UserWhereInput>
    posts?: PostListRelationFilter
    communitySubscriber?: CommunitySubscriberListRelationFilter
  }

  export type CommunityOrderByWithRelationInput = {
    id?: SortOrder
    adminId?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    subscriberCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    admin?: UserOrderByWithRelationInput
    posts?: PostOrderByRelationAggregateInput
    communitySubscriber?: CommunitySubscriberOrderByRelationAggregateInput
  }

  export type CommunityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: CommunityWhereInput | CommunityWhereInput[]
    OR?: CommunityWhereInput[]
    NOT?: CommunityWhereInput | CommunityWhereInput[]
    adminId?: IntFilter<"Community"> | number
    bio?: StringFilter<"Community"> | string
    subscriberCount?: IntFilter<"Community"> | number
    createdAt?: DateTimeFilter<"Community"> | Date | string
    updatedAt?: DateTimeFilter<"Community"> | Date | string
    admin?: XOR<UserRelationFilter, UserWhereInput>
    posts?: PostListRelationFilter
    communitySubscriber?: CommunitySubscriberListRelationFilter
  }, "id" | "name">

  export type CommunityOrderByWithAggregationInput = {
    id?: SortOrder
    adminId?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    subscriberCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CommunityCountOrderByAggregateInput
    _avg?: CommunityAvgOrderByAggregateInput
    _max?: CommunityMaxOrderByAggregateInput
    _min?: CommunityMinOrderByAggregateInput
    _sum?: CommunitySumOrderByAggregateInput
  }

  export type CommunityScalarWhereWithAggregatesInput = {
    AND?: CommunityScalarWhereWithAggregatesInput | CommunityScalarWhereWithAggregatesInput[]
    OR?: CommunityScalarWhereWithAggregatesInput[]
    NOT?: CommunityScalarWhereWithAggregatesInput | CommunityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Community"> | number
    adminId?: IntWithAggregatesFilter<"Community"> | number
    name?: StringWithAggregatesFilter<"Community"> | string
    bio?: StringWithAggregatesFilter<"Community"> | string
    subscriberCount?: IntWithAggregatesFilter<"Community"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Community"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Community"> | Date | string
  }

  export type CommunitySubscriberWhereInput = {
    AND?: CommunitySubscriberWhereInput | CommunitySubscriberWhereInput[]
    OR?: CommunitySubscriberWhereInput[]
    NOT?: CommunitySubscriberWhereInput | CommunitySubscriberWhereInput[]
    id?: IntFilter<"CommunitySubscriber"> | number
    userId?: IntFilter<"CommunitySubscriber"> | number
    communityId?: IntFilter<"CommunitySubscriber"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    community?: XOR<CommunityRelationFilter, CommunityWhereInput>
  }

  export type CommunitySubscriberOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    communityId?: SortOrder
    user?: UserOrderByWithRelationInput
    community?: CommunityOrderByWithRelationInput
  }

  export type CommunitySubscriberWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CommunitySubscriberWhereInput | CommunitySubscriberWhereInput[]
    OR?: CommunitySubscriberWhereInput[]
    NOT?: CommunitySubscriberWhereInput | CommunitySubscriberWhereInput[]
    userId?: IntFilter<"CommunitySubscriber"> | number
    communityId?: IntFilter<"CommunitySubscriber"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    community?: XOR<CommunityRelationFilter, CommunityWhereInput>
  }, "id">

  export type CommunitySubscriberOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    communityId?: SortOrder
    _count?: CommunitySubscriberCountOrderByAggregateInput
    _avg?: CommunitySubscriberAvgOrderByAggregateInput
    _max?: CommunitySubscriberMaxOrderByAggregateInput
    _min?: CommunitySubscriberMinOrderByAggregateInput
    _sum?: CommunitySubscriberSumOrderByAggregateInput
  }

  export type CommunitySubscriberScalarWhereWithAggregatesInput = {
    AND?: CommunitySubscriberScalarWhereWithAggregatesInput | CommunitySubscriberScalarWhereWithAggregatesInput[]
    OR?: CommunitySubscriberScalarWhereWithAggregatesInput[]
    NOT?: CommunitySubscriberScalarWhereWithAggregatesInput | CommunitySubscriberScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CommunitySubscriber"> | number
    userId?: IntWithAggregatesFilter<"CommunitySubscriber"> | number
    communityId?: IntWithAggregatesFilter<"CommunitySubscriber"> | number
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id?: IntFilter<"Comment"> | number
    postId?: IntFilter<"Comment"> | number
    userId?: IntFilter<"Comment"> | number
    content?: StringFilter<"Comment"> | string
    parentCommentId?: IntFilter<"Comment"> | number
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
    parent?: CommentParentChildrenListRelationFilter
    commentVote?: CommentVoteListRelationFilter
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    parentCommentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parent?: CommentParentChildrenOrderByRelationAggregateInput
    commentVote?: CommentVoteOrderByRelationAggregateInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    postId?: IntFilter<"Comment"> | number
    userId?: IntFilter<"Comment"> | number
    content?: StringFilter<"Comment"> | string
    parentCommentId?: IntFilter<"Comment"> | number
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
    parent?: CommentParentChildrenListRelationFilter
    commentVote?: CommentVoteListRelationFilter
  }, "id">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    parentCommentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CommentCountOrderByAggregateInput
    _avg?: CommentAvgOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
    _sum?: CommentSumOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Comment"> | number
    postId?: IntWithAggregatesFilter<"Comment"> | number
    userId?: IntWithAggregatesFilter<"Comment"> | number
    content?: StringWithAggregatesFilter<"Comment"> | string
    parentCommentId?: IntWithAggregatesFilter<"Comment"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
  }

  export type CommentVoteWhereInput = {
    AND?: CommentVoteWhereInput | CommentVoteWhereInput[]
    OR?: CommentVoteWhereInput[]
    NOT?: CommentVoteWhereInput | CommentVoteWhereInput[]
    id?: IntFilter<"CommentVote"> | number
    upvote?: BoolFilter<"CommentVote"> | boolean
    downvot?: BoolFilter<"CommentVote"> | boolean
    commentId?: IntFilter<"CommentVote"> | number
    userId?: IntFilter<"CommentVote"> | number
    comment?: XOR<CommentRelationFilter, CommentWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type CommentVoteOrderByWithRelationInput = {
    id?: SortOrder
    upvote?: SortOrder
    downvot?: SortOrder
    commentId?: SortOrder
    userId?: SortOrder
    comment?: CommentOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type CommentVoteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CommentVoteWhereInput | CommentVoteWhereInput[]
    OR?: CommentVoteWhereInput[]
    NOT?: CommentVoteWhereInput | CommentVoteWhereInput[]
    upvote?: BoolFilter<"CommentVote"> | boolean
    downvot?: BoolFilter<"CommentVote"> | boolean
    commentId?: IntFilter<"CommentVote"> | number
    userId?: IntFilter<"CommentVote"> | number
    comment?: XOR<CommentRelationFilter, CommentWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type CommentVoteOrderByWithAggregationInput = {
    id?: SortOrder
    upvote?: SortOrder
    downvot?: SortOrder
    commentId?: SortOrder
    userId?: SortOrder
    _count?: CommentVoteCountOrderByAggregateInput
    _avg?: CommentVoteAvgOrderByAggregateInput
    _max?: CommentVoteMaxOrderByAggregateInput
    _min?: CommentVoteMinOrderByAggregateInput
    _sum?: CommentVoteSumOrderByAggregateInput
  }

  export type CommentVoteScalarWhereWithAggregatesInput = {
    AND?: CommentVoteScalarWhereWithAggregatesInput | CommentVoteScalarWhereWithAggregatesInput[]
    OR?: CommentVoteScalarWhereWithAggregatesInput[]
    NOT?: CommentVoteScalarWhereWithAggregatesInput | CommentVoteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CommentVote"> | number
    upvote?: BoolWithAggregatesFilter<"CommentVote"> | boolean
    downvot?: BoolWithAggregatesFilter<"CommentVote"> | boolean
    commentId?: IntWithAggregatesFilter<"CommentVote"> | number
    userId?: IntWithAggregatesFilter<"CommentVote"> | number
  }

  export type CommentParentChildrenWhereInput = {
    AND?: CommentParentChildrenWhereInput | CommentParentChildrenWhereInput[]
    OR?: CommentParentChildrenWhereInput[]
    NOT?: CommentParentChildrenWhereInput | CommentParentChildrenWhereInput[]
    id?: IntFilter<"CommentParentChildren"> | number
    commentId?: IntFilter<"CommentParentChildren"> | number
    parentCommentId?: IntFilter<"CommentParentChildren"> | number
    parent?: XOR<CommentNullableRelationFilter, CommentWhereInput> | null
  }

  export type CommentParentChildrenOrderByWithRelationInput = {
    id?: SortOrder
    commentId?: SortOrder
    parentCommentId?: SortOrder
    parent?: CommentOrderByWithRelationInput
  }

  export type CommentParentChildrenWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CommentParentChildrenWhereInput | CommentParentChildrenWhereInput[]
    OR?: CommentParentChildrenWhereInput[]
    NOT?: CommentParentChildrenWhereInput | CommentParentChildrenWhereInput[]
    commentId?: IntFilter<"CommentParentChildren"> | number
    parentCommentId?: IntFilter<"CommentParentChildren"> | number
    parent?: XOR<CommentNullableRelationFilter, CommentWhereInput> | null
  }, "id">

  export type CommentParentChildrenOrderByWithAggregationInput = {
    id?: SortOrder
    commentId?: SortOrder
    parentCommentId?: SortOrder
    _count?: CommentParentChildrenCountOrderByAggregateInput
    _avg?: CommentParentChildrenAvgOrderByAggregateInput
    _max?: CommentParentChildrenMaxOrderByAggregateInput
    _min?: CommentParentChildrenMinOrderByAggregateInput
    _sum?: CommentParentChildrenSumOrderByAggregateInput
  }

  export type CommentParentChildrenScalarWhereWithAggregatesInput = {
    AND?: CommentParentChildrenScalarWhereWithAggregatesInput | CommentParentChildrenScalarWhereWithAggregatesInput[]
    OR?: CommentParentChildrenScalarWhereWithAggregatesInput[]
    NOT?: CommentParentChildrenScalarWhereWithAggregatesInput | CommentParentChildrenScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CommentParentChildren"> | number
    commentId?: IntWithAggregatesFilter<"CommentParentChildren"> | number
    parentCommentId?: IntWithAggregatesFilter<"CommentParentChildren"> | number
  }

  export type UserCreateInput = {
    username: string
    email: string
    password: string
    image?: string | null
    isAdmin?: boolean
    posts?: PostCreateNestedManyWithoutUserInput
    communities?: CommunityCreateNestedManyWithoutAdminInput
    postVote?: PostVoteCreateNestedManyWithoutUserInput
    communitySubscriber?: CommunitySubscriberCreateNestedManyWithoutUserInput
    commentVote?: CommentVoteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    email: string
    password: string
    image?: string | null
    isAdmin?: boolean
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    communities?: CommunityUncheckedCreateNestedManyWithoutAdminInput
    postVote?: PostVoteUncheckedCreateNestedManyWithoutUserInput
    communitySubscriber?: CommunitySubscriberUncheckedCreateNestedManyWithoutUserInput
    commentVote?: CommentVoteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    posts?: PostUpdateManyWithoutUserNestedInput
    communities?: CommunityUpdateManyWithoutAdminNestedInput
    postVote?: PostVoteUpdateManyWithoutUserNestedInput
    communitySubscriber?: CommunitySubscriberUpdateManyWithoutUserNestedInput
    commentVote?: CommentVoteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    communities?: CommunityUncheckedUpdateManyWithoutAdminNestedInput
    postVote?: PostVoteUncheckedUpdateManyWithoutUserNestedInput
    communitySubscriber?: CommunitySubscriberUncheckedUpdateManyWithoutUserNestedInput
    commentVote?: CommentVoteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    email: string
    password: string
    image?: string | null
    isAdmin?: boolean
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PostCreateInput = {
    title: string
    content: string
    imageUrl?: string | null
    commentCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPostsInput
    community: CommunityCreateNestedOneWithoutPostsInput
    postVote?: PostVoteCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateInput = {
    id?: number
    title: string
    content: string
    imageUrl?: string | null
    commentCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    communityId: number
    postVote?: PostVoteUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    commentCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
    community?: CommunityUpdateOneRequiredWithoutPostsNestedInput
    postVote?: PostVoteUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    commentCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    communityId?: IntFieldUpdateOperationsInput | number
    postVote?: PostVoteUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostCreateManyInput = {
    id?: number
    title: string
    content: string
    imageUrl?: string | null
    commentCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    communityId: number
  }

  export type PostUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    commentCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    commentCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    communityId?: IntFieldUpdateOperationsInput | number
  }

  export type PostVoteCreateInput = {
    upvote?: boolean
    downvot?: boolean
    post: PostCreateNestedOneWithoutPostVoteInput
    user: UserCreateNestedOneWithoutPostVoteInput
  }

  export type PostVoteUncheckedCreateInput = {
    id?: number
    upvote?: boolean
    downvot?: boolean
    postId: number
    userId: number
  }

  export type PostVoteUpdateInput = {
    upvote?: BoolFieldUpdateOperationsInput | boolean
    downvot?: BoolFieldUpdateOperationsInput | boolean
    post?: PostUpdateOneRequiredWithoutPostVoteNestedInput
    user?: UserUpdateOneRequiredWithoutPostVoteNestedInput
  }

  export type PostVoteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    upvote?: BoolFieldUpdateOperationsInput | boolean
    downvot?: BoolFieldUpdateOperationsInput | boolean
    postId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type PostVoteCreateManyInput = {
    id?: number
    upvote?: boolean
    downvot?: boolean
    postId: number
    userId: number
  }

  export type PostVoteUpdateManyMutationInput = {
    upvote?: BoolFieldUpdateOperationsInput | boolean
    downvot?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PostVoteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    upvote?: BoolFieldUpdateOperationsInput | boolean
    downvot?: BoolFieldUpdateOperationsInput | boolean
    postId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type CommunityCreateInput = {
    name: string
    bio: string
    subscriberCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    admin: UserCreateNestedOneWithoutCommunitiesInput
    posts?: PostCreateNestedManyWithoutCommunityInput
    communitySubscriber?: CommunitySubscriberCreateNestedManyWithoutCommunityInput
  }

  export type CommunityUncheckedCreateInput = {
    id?: number
    adminId: number
    name: string
    bio: string
    subscriberCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostUncheckedCreateNestedManyWithoutCommunityInput
    communitySubscriber?: CommunitySubscriberUncheckedCreateNestedManyWithoutCommunityInput
  }

  export type CommunityUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    subscriberCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: UserUpdateOneRequiredWithoutCommunitiesNestedInput
    posts?: PostUpdateManyWithoutCommunityNestedInput
    communitySubscriber?: CommunitySubscriberUpdateManyWithoutCommunityNestedInput
  }

  export type CommunityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    adminId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    subscriberCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUncheckedUpdateManyWithoutCommunityNestedInput
    communitySubscriber?: CommunitySubscriberUncheckedUpdateManyWithoutCommunityNestedInput
  }

  export type CommunityCreateManyInput = {
    id?: number
    adminId: number
    name: string
    bio: string
    subscriberCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommunityUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    subscriberCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    adminId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    subscriberCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunitySubscriberCreateInput = {
    user: UserCreateNestedOneWithoutCommunitySubscriberInput
    community: CommunityCreateNestedOneWithoutCommunitySubscriberInput
  }

  export type CommunitySubscriberUncheckedCreateInput = {
    id?: number
    userId: number
    communityId: number
  }

  export type CommunitySubscriberUpdateInput = {
    user?: UserUpdateOneRequiredWithoutCommunitySubscriberNestedInput
    community?: CommunityUpdateOneRequiredWithoutCommunitySubscriberNestedInput
  }

  export type CommunitySubscriberUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    communityId?: IntFieldUpdateOperationsInput | number
  }

  export type CommunitySubscriberCreateManyInput = {
    id?: number
    userId: number
    communityId: number
  }

  export type CommunitySubscriberUpdateManyMutationInput = {

  }

  export type CommunitySubscriberUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    communityId?: IntFieldUpdateOperationsInput | number
  }

  export type CommentCreateInput = {
    postId: number
    userId: number
    content: string
    parentCommentId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: CommentParentChildrenCreateNestedManyWithoutParentInput
    commentVote?: CommentVoteCreateNestedManyWithoutCommentInput
  }

  export type CommentUncheckedCreateInput = {
    id?: number
    postId: number
    userId: number
    content: string
    parentCommentId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: CommentParentChildrenUncheckedCreateNestedManyWithoutParentInput
    commentVote?: CommentVoteUncheckedCreateNestedManyWithoutCommentInput
  }

  export type CommentUpdateInput = {
    postId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    parentCommentId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: CommentParentChildrenUpdateManyWithoutParentNestedInput
    commentVote?: CommentVoteUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    parentCommentId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: CommentParentChildrenUncheckedUpdateManyWithoutParentNestedInput
    commentVote?: CommentVoteUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type CommentCreateManyInput = {
    id?: number
    postId: number
    userId: number
    content: string
    parentCommentId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentUpdateManyMutationInput = {
    postId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    parentCommentId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    parentCommentId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentVoteCreateInput = {
    upvote?: boolean
    downvot?: boolean
    comment: CommentCreateNestedOneWithoutCommentVoteInput
    user: UserCreateNestedOneWithoutCommentVoteInput
  }

  export type CommentVoteUncheckedCreateInput = {
    id?: number
    upvote?: boolean
    downvot?: boolean
    commentId: number
    userId: number
  }

  export type CommentVoteUpdateInput = {
    upvote?: BoolFieldUpdateOperationsInput | boolean
    downvot?: BoolFieldUpdateOperationsInput | boolean
    comment?: CommentUpdateOneRequiredWithoutCommentVoteNestedInput
    user?: UserUpdateOneRequiredWithoutCommentVoteNestedInput
  }

  export type CommentVoteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    upvote?: BoolFieldUpdateOperationsInput | boolean
    downvot?: BoolFieldUpdateOperationsInput | boolean
    commentId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type CommentVoteCreateManyInput = {
    id?: number
    upvote?: boolean
    downvot?: boolean
    commentId: number
    userId: number
  }

  export type CommentVoteUpdateManyMutationInput = {
    upvote?: BoolFieldUpdateOperationsInput | boolean
    downvot?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CommentVoteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    upvote?: BoolFieldUpdateOperationsInput | boolean
    downvot?: BoolFieldUpdateOperationsInput | boolean
    commentId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type CommentParentChildrenCreateInput = {
    commentId: number
    parent?: CommentCreateNestedOneWithoutParentInput
  }

  export type CommentParentChildrenUncheckedCreateInput = {
    id?: number
    commentId: number
    parentCommentId: number
  }

  export type CommentParentChildrenUpdateInput = {
    commentId?: IntFieldUpdateOperationsInput | number
    parent?: CommentUpdateOneWithoutParentNestedInput
  }

  export type CommentParentChildrenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    commentId?: IntFieldUpdateOperationsInput | number
    parentCommentId?: IntFieldUpdateOperationsInput | number
  }

  export type CommentParentChildrenCreateManyInput = {
    id?: number
    commentId: number
    parentCommentId: number
  }

  export type CommentParentChildrenUpdateManyMutationInput = {
    commentId?: IntFieldUpdateOperationsInput | number
  }

  export type CommentParentChildrenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    commentId?: IntFieldUpdateOperationsInput | number
    parentCommentId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type CommunityListRelationFilter = {
    every?: CommunityWhereInput
    some?: CommunityWhereInput
    none?: CommunityWhereInput
  }

  export type PostVoteListRelationFilter = {
    every?: PostVoteWhereInput
    some?: PostVoteWhereInput
    none?: PostVoteWhereInput
  }

  export type CommunitySubscriberListRelationFilter = {
    every?: CommunitySubscriberWhereInput
    some?: CommunitySubscriberWhereInput
    none?: CommunitySubscriberWhereInput
  }

  export type CommentVoteListRelationFilter = {
    every?: CommentVoteWhereInput
    some?: CommentVoteWhereInput
    none?: CommentVoteWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommunityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostVoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommunitySubscriberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentVoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    image?: SortOrder
    isAdmin?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    image?: SortOrder
    isAdmin?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    image?: SortOrder
    isAdmin?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CommunityRelationFilter = {
    is?: CommunityWhereInput
    isNot?: CommunityWhereInput
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    imageUrl?: SortOrder
    commentCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    communityId?: SortOrder
  }

  export type PostAvgOrderByAggregateInput = {
    id?: SortOrder
    commentCount?: SortOrder
    userId?: SortOrder
    communityId?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    imageUrl?: SortOrder
    commentCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    communityId?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    imageUrl?: SortOrder
    commentCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    communityId?: SortOrder
  }

  export type PostSumOrderByAggregateInput = {
    id?: SortOrder
    commentCount?: SortOrder
    userId?: SortOrder
    communityId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type PostRelationFilter = {
    is?: PostWhereInput
    isNot?: PostWhereInput
  }

  export type PostVoteCountOrderByAggregateInput = {
    id?: SortOrder
    upvote?: SortOrder
    downvot?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
  }

  export type PostVoteAvgOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
  }

  export type PostVoteMaxOrderByAggregateInput = {
    id?: SortOrder
    upvote?: SortOrder
    downvot?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
  }

  export type PostVoteMinOrderByAggregateInput = {
    id?: SortOrder
    upvote?: SortOrder
    downvot?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
  }

  export type PostVoteSumOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
  }

  export type CommunityCountOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    subscriberCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommunityAvgOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
    subscriberCount?: SortOrder
  }

  export type CommunityMaxOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    subscriberCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommunityMinOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    subscriberCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommunitySumOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
    subscriberCount?: SortOrder
  }

  export type CommunitySubscriberCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    communityId?: SortOrder
  }

  export type CommunitySubscriberAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    communityId?: SortOrder
  }

  export type CommunitySubscriberMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    communityId?: SortOrder
  }

  export type CommunitySubscriberMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    communityId?: SortOrder
  }

  export type CommunitySubscriberSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    communityId?: SortOrder
  }

  export type CommentParentChildrenListRelationFilter = {
    every?: CommentParentChildrenWhereInput
    some?: CommentParentChildrenWhereInput
    none?: CommentParentChildrenWhereInput
  }

  export type CommentParentChildrenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    parentCommentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentAvgOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    parentCommentId?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    parentCommentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    parentCommentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentSumOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    parentCommentId?: SortOrder
  }

  export type CommentRelationFilter = {
    is?: CommentWhereInput
    isNot?: CommentWhereInput
  }

  export type CommentVoteCountOrderByAggregateInput = {
    id?: SortOrder
    upvote?: SortOrder
    downvot?: SortOrder
    commentId?: SortOrder
    userId?: SortOrder
  }

  export type CommentVoteAvgOrderByAggregateInput = {
    id?: SortOrder
    commentId?: SortOrder
    userId?: SortOrder
  }

  export type CommentVoteMaxOrderByAggregateInput = {
    id?: SortOrder
    upvote?: SortOrder
    downvot?: SortOrder
    commentId?: SortOrder
    userId?: SortOrder
  }

  export type CommentVoteMinOrderByAggregateInput = {
    id?: SortOrder
    upvote?: SortOrder
    downvot?: SortOrder
    commentId?: SortOrder
    userId?: SortOrder
  }

  export type CommentVoteSumOrderByAggregateInput = {
    id?: SortOrder
    commentId?: SortOrder
    userId?: SortOrder
  }

  export type CommentNullableRelationFilter = {
    is?: CommentWhereInput | null
    isNot?: CommentWhereInput | null
  }

  export type CommentParentChildrenCountOrderByAggregateInput = {
    id?: SortOrder
    commentId?: SortOrder
    parentCommentId?: SortOrder
  }

  export type CommentParentChildrenAvgOrderByAggregateInput = {
    id?: SortOrder
    commentId?: SortOrder
    parentCommentId?: SortOrder
  }

  export type CommentParentChildrenMaxOrderByAggregateInput = {
    id?: SortOrder
    commentId?: SortOrder
    parentCommentId?: SortOrder
  }

  export type CommentParentChildrenMinOrderByAggregateInput = {
    id?: SortOrder
    commentId?: SortOrder
    parentCommentId?: SortOrder
  }

  export type CommentParentChildrenSumOrderByAggregateInput = {
    id?: SortOrder
    commentId?: SortOrder
    parentCommentId?: SortOrder
  }

  export type PostCreateNestedManyWithoutUserInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type CommunityCreateNestedManyWithoutAdminInput = {
    create?: XOR<CommunityCreateWithoutAdminInput, CommunityUncheckedCreateWithoutAdminInput> | CommunityCreateWithoutAdminInput[] | CommunityUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: CommunityCreateOrConnectWithoutAdminInput | CommunityCreateOrConnectWithoutAdminInput[]
    createMany?: CommunityCreateManyAdminInputEnvelope
    connect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
  }

  export type PostVoteCreateNestedManyWithoutUserInput = {
    create?: XOR<PostVoteCreateWithoutUserInput, PostVoteUncheckedCreateWithoutUserInput> | PostVoteCreateWithoutUserInput[] | PostVoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostVoteCreateOrConnectWithoutUserInput | PostVoteCreateOrConnectWithoutUserInput[]
    createMany?: PostVoteCreateManyUserInputEnvelope
    connect?: PostVoteWhereUniqueInput | PostVoteWhereUniqueInput[]
  }

  export type CommunitySubscriberCreateNestedManyWithoutUserInput = {
    create?: XOR<CommunitySubscriberCreateWithoutUserInput, CommunitySubscriberUncheckedCreateWithoutUserInput> | CommunitySubscriberCreateWithoutUserInput[] | CommunitySubscriberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommunitySubscriberCreateOrConnectWithoutUserInput | CommunitySubscriberCreateOrConnectWithoutUserInput[]
    createMany?: CommunitySubscriberCreateManyUserInputEnvelope
    connect?: CommunitySubscriberWhereUniqueInput | CommunitySubscriberWhereUniqueInput[]
  }

  export type CommentVoteCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentVoteCreateWithoutUserInput, CommentVoteUncheckedCreateWithoutUserInput> | CommentVoteCreateWithoutUserInput[] | CommentVoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentVoteCreateOrConnectWithoutUserInput | CommentVoteCreateOrConnectWithoutUserInput[]
    createMany?: CommentVoteCreateManyUserInputEnvelope
    connect?: CommentVoteWhereUniqueInput | CommentVoteWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type CommunityUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<CommunityCreateWithoutAdminInput, CommunityUncheckedCreateWithoutAdminInput> | CommunityCreateWithoutAdminInput[] | CommunityUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: CommunityCreateOrConnectWithoutAdminInput | CommunityCreateOrConnectWithoutAdminInput[]
    createMany?: CommunityCreateManyAdminInputEnvelope
    connect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
  }

  export type PostVoteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PostVoteCreateWithoutUserInput, PostVoteUncheckedCreateWithoutUserInput> | PostVoteCreateWithoutUserInput[] | PostVoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostVoteCreateOrConnectWithoutUserInput | PostVoteCreateOrConnectWithoutUserInput[]
    createMany?: PostVoteCreateManyUserInputEnvelope
    connect?: PostVoteWhereUniqueInput | PostVoteWhereUniqueInput[]
  }

  export type CommunitySubscriberUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CommunitySubscriberCreateWithoutUserInput, CommunitySubscriberUncheckedCreateWithoutUserInput> | CommunitySubscriberCreateWithoutUserInput[] | CommunitySubscriberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommunitySubscriberCreateOrConnectWithoutUserInput | CommunitySubscriberCreateOrConnectWithoutUserInput[]
    createMany?: CommunitySubscriberCreateManyUserInputEnvelope
    connect?: CommunitySubscriberWhereUniqueInput | CommunitySubscriberWhereUniqueInput[]
  }

  export type CommentVoteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentVoteCreateWithoutUserInput, CommentVoteUncheckedCreateWithoutUserInput> | CommentVoteCreateWithoutUserInput[] | CommentVoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentVoteCreateOrConnectWithoutUserInput | CommentVoteCreateOrConnectWithoutUserInput[]
    createMany?: CommentVoteCreateManyUserInputEnvelope
    connect?: CommentVoteWhereUniqueInput | CommentVoteWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type PostUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutUserInput | PostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutUserInput | PostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostUpdateManyWithWhereWithoutUserInput | PostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type CommunityUpdateManyWithoutAdminNestedInput = {
    create?: XOR<CommunityCreateWithoutAdminInput, CommunityUncheckedCreateWithoutAdminInput> | CommunityCreateWithoutAdminInput[] | CommunityUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: CommunityCreateOrConnectWithoutAdminInput | CommunityCreateOrConnectWithoutAdminInput[]
    upsert?: CommunityUpsertWithWhereUniqueWithoutAdminInput | CommunityUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: CommunityCreateManyAdminInputEnvelope
    set?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    disconnect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    delete?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    connect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    update?: CommunityUpdateWithWhereUniqueWithoutAdminInput | CommunityUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: CommunityUpdateManyWithWhereWithoutAdminInput | CommunityUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: CommunityScalarWhereInput | CommunityScalarWhereInput[]
  }

  export type PostVoteUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostVoteCreateWithoutUserInput, PostVoteUncheckedCreateWithoutUserInput> | PostVoteCreateWithoutUserInput[] | PostVoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostVoteCreateOrConnectWithoutUserInput | PostVoteCreateOrConnectWithoutUserInput[]
    upsert?: PostVoteUpsertWithWhereUniqueWithoutUserInput | PostVoteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostVoteCreateManyUserInputEnvelope
    set?: PostVoteWhereUniqueInput | PostVoteWhereUniqueInput[]
    disconnect?: PostVoteWhereUniqueInput | PostVoteWhereUniqueInput[]
    delete?: PostVoteWhereUniqueInput | PostVoteWhereUniqueInput[]
    connect?: PostVoteWhereUniqueInput | PostVoteWhereUniqueInput[]
    update?: PostVoteUpdateWithWhereUniqueWithoutUserInput | PostVoteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostVoteUpdateManyWithWhereWithoutUserInput | PostVoteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostVoteScalarWhereInput | PostVoteScalarWhereInput[]
  }

  export type CommunitySubscriberUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommunitySubscriberCreateWithoutUserInput, CommunitySubscriberUncheckedCreateWithoutUserInput> | CommunitySubscriberCreateWithoutUserInput[] | CommunitySubscriberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommunitySubscriberCreateOrConnectWithoutUserInput | CommunitySubscriberCreateOrConnectWithoutUserInput[]
    upsert?: CommunitySubscriberUpsertWithWhereUniqueWithoutUserInput | CommunitySubscriberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommunitySubscriberCreateManyUserInputEnvelope
    set?: CommunitySubscriberWhereUniqueInput | CommunitySubscriberWhereUniqueInput[]
    disconnect?: CommunitySubscriberWhereUniqueInput | CommunitySubscriberWhereUniqueInput[]
    delete?: CommunitySubscriberWhereUniqueInput | CommunitySubscriberWhereUniqueInput[]
    connect?: CommunitySubscriberWhereUniqueInput | CommunitySubscriberWhereUniqueInput[]
    update?: CommunitySubscriberUpdateWithWhereUniqueWithoutUserInput | CommunitySubscriberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommunitySubscriberUpdateManyWithWhereWithoutUserInput | CommunitySubscriberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommunitySubscriberScalarWhereInput | CommunitySubscriberScalarWhereInput[]
  }

  export type CommentVoteUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentVoteCreateWithoutUserInput, CommentVoteUncheckedCreateWithoutUserInput> | CommentVoteCreateWithoutUserInput[] | CommentVoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentVoteCreateOrConnectWithoutUserInput | CommentVoteCreateOrConnectWithoutUserInput[]
    upsert?: CommentVoteUpsertWithWhereUniqueWithoutUserInput | CommentVoteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentVoteCreateManyUserInputEnvelope
    set?: CommentVoteWhereUniqueInput | CommentVoteWhereUniqueInput[]
    disconnect?: CommentVoteWhereUniqueInput | CommentVoteWhereUniqueInput[]
    delete?: CommentVoteWhereUniqueInput | CommentVoteWhereUniqueInput[]
    connect?: CommentVoteWhereUniqueInput | CommentVoteWhereUniqueInput[]
    update?: CommentVoteUpdateWithWhereUniqueWithoutUserInput | CommentVoteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentVoteUpdateManyWithWhereWithoutUserInput | CommentVoteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentVoteScalarWhereInput | CommentVoteScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PostUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutUserInput | PostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutUserInput | PostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostUpdateManyWithWhereWithoutUserInput | PostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type CommunityUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<CommunityCreateWithoutAdminInput, CommunityUncheckedCreateWithoutAdminInput> | CommunityCreateWithoutAdminInput[] | CommunityUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: CommunityCreateOrConnectWithoutAdminInput | CommunityCreateOrConnectWithoutAdminInput[]
    upsert?: CommunityUpsertWithWhereUniqueWithoutAdminInput | CommunityUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: CommunityCreateManyAdminInputEnvelope
    set?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    disconnect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    delete?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    connect?: CommunityWhereUniqueInput | CommunityWhereUniqueInput[]
    update?: CommunityUpdateWithWhereUniqueWithoutAdminInput | CommunityUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: CommunityUpdateManyWithWhereWithoutAdminInput | CommunityUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: CommunityScalarWhereInput | CommunityScalarWhereInput[]
  }

  export type PostVoteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostVoteCreateWithoutUserInput, PostVoteUncheckedCreateWithoutUserInput> | PostVoteCreateWithoutUserInput[] | PostVoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostVoteCreateOrConnectWithoutUserInput | PostVoteCreateOrConnectWithoutUserInput[]
    upsert?: PostVoteUpsertWithWhereUniqueWithoutUserInput | PostVoteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostVoteCreateManyUserInputEnvelope
    set?: PostVoteWhereUniqueInput | PostVoteWhereUniqueInput[]
    disconnect?: PostVoteWhereUniqueInput | PostVoteWhereUniqueInput[]
    delete?: PostVoteWhereUniqueInput | PostVoteWhereUniqueInput[]
    connect?: PostVoteWhereUniqueInput | PostVoteWhereUniqueInput[]
    update?: PostVoteUpdateWithWhereUniqueWithoutUserInput | PostVoteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostVoteUpdateManyWithWhereWithoutUserInput | PostVoteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostVoteScalarWhereInput | PostVoteScalarWhereInput[]
  }

  export type CommunitySubscriberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommunitySubscriberCreateWithoutUserInput, CommunitySubscriberUncheckedCreateWithoutUserInput> | CommunitySubscriberCreateWithoutUserInput[] | CommunitySubscriberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommunitySubscriberCreateOrConnectWithoutUserInput | CommunitySubscriberCreateOrConnectWithoutUserInput[]
    upsert?: CommunitySubscriberUpsertWithWhereUniqueWithoutUserInput | CommunitySubscriberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommunitySubscriberCreateManyUserInputEnvelope
    set?: CommunitySubscriberWhereUniqueInput | CommunitySubscriberWhereUniqueInput[]
    disconnect?: CommunitySubscriberWhereUniqueInput | CommunitySubscriberWhereUniqueInput[]
    delete?: CommunitySubscriberWhereUniqueInput | CommunitySubscriberWhereUniqueInput[]
    connect?: CommunitySubscriberWhereUniqueInput | CommunitySubscriberWhereUniqueInput[]
    update?: CommunitySubscriberUpdateWithWhereUniqueWithoutUserInput | CommunitySubscriberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommunitySubscriberUpdateManyWithWhereWithoutUserInput | CommunitySubscriberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommunitySubscriberScalarWhereInput | CommunitySubscriberScalarWhereInput[]
  }

  export type CommentVoteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentVoteCreateWithoutUserInput, CommentVoteUncheckedCreateWithoutUserInput> | CommentVoteCreateWithoutUserInput[] | CommentVoteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentVoteCreateOrConnectWithoutUserInput | CommentVoteCreateOrConnectWithoutUserInput[]
    upsert?: CommentVoteUpsertWithWhereUniqueWithoutUserInput | CommentVoteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentVoteCreateManyUserInputEnvelope
    set?: CommentVoteWhereUniqueInput | CommentVoteWhereUniqueInput[]
    disconnect?: CommentVoteWhereUniqueInput | CommentVoteWhereUniqueInput[]
    delete?: CommentVoteWhereUniqueInput | CommentVoteWhereUniqueInput[]
    connect?: CommentVoteWhereUniqueInput | CommentVoteWhereUniqueInput[]
    update?: CommentVoteUpdateWithWhereUniqueWithoutUserInput | CommentVoteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentVoteUpdateManyWithWhereWithoutUserInput | CommentVoteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentVoteScalarWhereInput | CommentVoteScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
  }

  export type CommunityCreateNestedOneWithoutPostsInput = {
    create?: XOR<CommunityCreateWithoutPostsInput, CommunityUncheckedCreateWithoutPostsInput>
    connectOrCreate?: CommunityCreateOrConnectWithoutPostsInput
    connect?: CommunityWhereUniqueInput
  }

  export type PostVoteCreateNestedManyWithoutPostInput = {
    create?: XOR<PostVoteCreateWithoutPostInput, PostVoteUncheckedCreateWithoutPostInput> | PostVoteCreateWithoutPostInput[] | PostVoteUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostVoteCreateOrConnectWithoutPostInput | PostVoteCreateOrConnectWithoutPostInput[]
    createMany?: PostVoteCreateManyPostInputEnvelope
    connect?: PostVoteWhereUniqueInput | PostVoteWhereUniqueInput[]
  }

  export type PostVoteUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<PostVoteCreateWithoutPostInput, PostVoteUncheckedCreateWithoutPostInput> | PostVoteCreateWithoutPostInput[] | PostVoteUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostVoteCreateOrConnectWithoutPostInput | PostVoteCreateOrConnectWithoutPostInput[]
    createMany?: PostVoteCreateManyPostInputEnvelope
    connect?: PostVoteWhereUniqueInput | PostVoteWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostsInput, UserUpdateWithoutPostsInput>, UserUncheckedUpdateWithoutPostsInput>
  }

  export type CommunityUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<CommunityCreateWithoutPostsInput, CommunityUncheckedCreateWithoutPostsInput>
    connectOrCreate?: CommunityCreateOrConnectWithoutPostsInput
    upsert?: CommunityUpsertWithoutPostsInput
    connect?: CommunityWhereUniqueInput
    update?: XOR<XOR<CommunityUpdateToOneWithWhereWithoutPostsInput, CommunityUpdateWithoutPostsInput>, CommunityUncheckedUpdateWithoutPostsInput>
  }

  export type PostVoteUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostVoteCreateWithoutPostInput, PostVoteUncheckedCreateWithoutPostInput> | PostVoteCreateWithoutPostInput[] | PostVoteUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostVoteCreateOrConnectWithoutPostInput | PostVoteCreateOrConnectWithoutPostInput[]
    upsert?: PostVoteUpsertWithWhereUniqueWithoutPostInput | PostVoteUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostVoteCreateManyPostInputEnvelope
    set?: PostVoteWhereUniqueInput | PostVoteWhereUniqueInput[]
    disconnect?: PostVoteWhereUniqueInput | PostVoteWhereUniqueInput[]
    delete?: PostVoteWhereUniqueInput | PostVoteWhereUniqueInput[]
    connect?: PostVoteWhereUniqueInput | PostVoteWhereUniqueInput[]
    update?: PostVoteUpdateWithWhereUniqueWithoutPostInput | PostVoteUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostVoteUpdateManyWithWhereWithoutPostInput | PostVoteUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostVoteScalarWhereInput | PostVoteScalarWhereInput[]
  }

  export type PostVoteUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostVoteCreateWithoutPostInput, PostVoteUncheckedCreateWithoutPostInput> | PostVoteCreateWithoutPostInput[] | PostVoteUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostVoteCreateOrConnectWithoutPostInput | PostVoteCreateOrConnectWithoutPostInput[]
    upsert?: PostVoteUpsertWithWhereUniqueWithoutPostInput | PostVoteUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostVoteCreateManyPostInputEnvelope
    set?: PostVoteWhereUniqueInput | PostVoteWhereUniqueInput[]
    disconnect?: PostVoteWhereUniqueInput | PostVoteWhereUniqueInput[]
    delete?: PostVoteWhereUniqueInput | PostVoteWhereUniqueInput[]
    connect?: PostVoteWhereUniqueInput | PostVoteWhereUniqueInput[]
    update?: PostVoteUpdateWithWhereUniqueWithoutPostInput | PostVoteUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostVoteUpdateManyWithWhereWithoutPostInput | PostVoteUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostVoteScalarWhereInput | PostVoteScalarWhereInput[]
  }

  export type PostCreateNestedOneWithoutPostVoteInput = {
    create?: XOR<PostCreateWithoutPostVoteInput, PostUncheckedCreateWithoutPostVoteInput>
    connectOrCreate?: PostCreateOrConnectWithoutPostVoteInput
    connect?: PostWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPostVoteInput = {
    create?: XOR<UserCreateWithoutPostVoteInput, UserUncheckedCreateWithoutPostVoteInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostVoteInput
    connect?: UserWhereUniqueInput
  }

  export type PostUpdateOneRequiredWithoutPostVoteNestedInput = {
    create?: XOR<PostCreateWithoutPostVoteInput, PostUncheckedCreateWithoutPostVoteInput>
    connectOrCreate?: PostCreateOrConnectWithoutPostVoteInput
    upsert?: PostUpsertWithoutPostVoteInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutPostVoteInput, PostUpdateWithoutPostVoteInput>, PostUncheckedUpdateWithoutPostVoteInput>
  }

  export type UserUpdateOneRequiredWithoutPostVoteNestedInput = {
    create?: XOR<UserCreateWithoutPostVoteInput, UserUncheckedCreateWithoutPostVoteInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostVoteInput
    upsert?: UserUpsertWithoutPostVoteInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostVoteInput, UserUpdateWithoutPostVoteInput>, UserUncheckedUpdateWithoutPostVoteInput>
  }

  export type UserCreateNestedOneWithoutCommunitiesInput = {
    create?: XOR<UserCreateWithoutCommunitiesInput, UserUncheckedCreateWithoutCommunitiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommunitiesInput
    connect?: UserWhereUniqueInput
  }

  export type PostCreateNestedManyWithoutCommunityInput = {
    create?: XOR<PostCreateWithoutCommunityInput, PostUncheckedCreateWithoutCommunityInput> | PostCreateWithoutCommunityInput[] | PostUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCommunityInput | PostCreateOrConnectWithoutCommunityInput[]
    createMany?: PostCreateManyCommunityInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type CommunitySubscriberCreateNestedManyWithoutCommunityInput = {
    create?: XOR<CommunitySubscriberCreateWithoutCommunityInput, CommunitySubscriberUncheckedCreateWithoutCommunityInput> | CommunitySubscriberCreateWithoutCommunityInput[] | CommunitySubscriberUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: CommunitySubscriberCreateOrConnectWithoutCommunityInput | CommunitySubscriberCreateOrConnectWithoutCommunityInput[]
    createMany?: CommunitySubscriberCreateManyCommunityInputEnvelope
    connect?: CommunitySubscriberWhereUniqueInput | CommunitySubscriberWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutCommunityInput = {
    create?: XOR<PostCreateWithoutCommunityInput, PostUncheckedCreateWithoutCommunityInput> | PostCreateWithoutCommunityInput[] | PostUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCommunityInput | PostCreateOrConnectWithoutCommunityInput[]
    createMany?: PostCreateManyCommunityInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type CommunitySubscriberUncheckedCreateNestedManyWithoutCommunityInput = {
    create?: XOR<CommunitySubscriberCreateWithoutCommunityInput, CommunitySubscriberUncheckedCreateWithoutCommunityInput> | CommunitySubscriberCreateWithoutCommunityInput[] | CommunitySubscriberUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: CommunitySubscriberCreateOrConnectWithoutCommunityInput | CommunitySubscriberCreateOrConnectWithoutCommunityInput[]
    createMany?: CommunitySubscriberCreateManyCommunityInputEnvelope
    connect?: CommunitySubscriberWhereUniqueInput | CommunitySubscriberWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutCommunitiesNestedInput = {
    create?: XOR<UserCreateWithoutCommunitiesInput, UserUncheckedCreateWithoutCommunitiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommunitiesInput
    upsert?: UserUpsertWithoutCommunitiesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommunitiesInput, UserUpdateWithoutCommunitiesInput>, UserUncheckedUpdateWithoutCommunitiesInput>
  }

  export type PostUpdateManyWithoutCommunityNestedInput = {
    create?: XOR<PostCreateWithoutCommunityInput, PostUncheckedCreateWithoutCommunityInput> | PostCreateWithoutCommunityInput[] | PostUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCommunityInput | PostCreateOrConnectWithoutCommunityInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutCommunityInput | PostUpsertWithWhereUniqueWithoutCommunityInput[]
    createMany?: PostCreateManyCommunityInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutCommunityInput | PostUpdateWithWhereUniqueWithoutCommunityInput[]
    updateMany?: PostUpdateManyWithWhereWithoutCommunityInput | PostUpdateManyWithWhereWithoutCommunityInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type CommunitySubscriberUpdateManyWithoutCommunityNestedInput = {
    create?: XOR<CommunitySubscriberCreateWithoutCommunityInput, CommunitySubscriberUncheckedCreateWithoutCommunityInput> | CommunitySubscriberCreateWithoutCommunityInput[] | CommunitySubscriberUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: CommunitySubscriberCreateOrConnectWithoutCommunityInput | CommunitySubscriberCreateOrConnectWithoutCommunityInput[]
    upsert?: CommunitySubscriberUpsertWithWhereUniqueWithoutCommunityInput | CommunitySubscriberUpsertWithWhereUniqueWithoutCommunityInput[]
    createMany?: CommunitySubscriberCreateManyCommunityInputEnvelope
    set?: CommunitySubscriberWhereUniqueInput | CommunitySubscriberWhereUniqueInput[]
    disconnect?: CommunitySubscriberWhereUniqueInput | CommunitySubscriberWhereUniqueInput[]
    delete?: CommunitySubscriberWhereUniqueInput | CommunitySubscriberWhereUniqueInput[]
    connect?: CommunitySubscriberWhereUniqueInput | CommunitySubscriberWhereUniqueInput[]
    update?: CommunitySubscriberUpdateWithWhereUniqueWithoutCommunityInput | CommunitySubscriberUpdateWithWhereUniqueWithoutCommunityInput[]
    updateMany?: CommunitySubscriberUpdateManyWithWhereWithoutCommunityInput | CommunitySubscriberUpdateManyWithWhereWithoutCommunityInput[]
    deleteMany?: CommunitySubscriberScalarWhereInput | CommunitySubscriberScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutCommunityNestedInput = {
    create?: XOR<PostCreateWithoutCommunityInput, PostUncheckedCreateWithoutCommunityInput> | PostCreateWithoutCommunityInput[] | PostUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCommunityInput | PostCreateOrConnectWithoutCommunityInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutCommunityInput | PostUpsertWithWhereUniqueWithoutCommunityInput[]
    createMany?: PostCreateManyCommunityInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutCommunityInput | PostUpdateWithWhereUniqueWithoutCommunityInput[]
    updateMany?: PostUpdateManyWithWhereWithoutCommunityInput | PostUpdateManyWithWhereWithoutCommunityInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type CommunitySubscriberUncheckedUpdateManyWithoutCommunityNestedInput = {
    create?: XOR<CommunitySubscriberCreateWithoutCommunityInput, CommunitySubscriberUncheckedCreateWithoutCommunityInput> | CommunitySubscriberCreateWithoutCommunityInput[] | CommunitySubscriberUncheckedCreateWithoutCommunityInput[]
    connectOrCreate?: CommunitySubscriberCreateOrConnectWithoutCommunityInput | CommunitySubscriberCreateOrConnectWithoutCommunityInput[]
    upsert?: CommunitySubscriberUpsertWithWhereUniqueWithoutCommunityInput | CommunitySubscriberUpsertWithWhereUniqueWithoutCommunityInput[]
    createMany?: CommunitySubscriberCreateManyCommunityInputEnvelope
    set?: CommunitySubscriberWhereUniqueInput | CommunitySubscriberWhereUniqueInput[]
    disconnect?: CommunitySubscriberWhereUniqueInput | CommunitySubscriberWhereUniqueInput[]
    delete?: CommunitySubscriberWhereUniqueInput | CommunitySubscriberWhereUniqueInput[]
    connect?: CommunitySubscriberWhereUniqueInput | CommunitySubscriberWhereUniqueInput[]
    update?: CommunitySubscriberUpdateWithWhereUniqueWithoutCommunityInput | CommunitySubscriberUpdateWithWhereUniqueWithoutCommunityInput[]
    updateMany?: CommunitySubscriberUpdateManyWithWhereWithoutCommunityInput | CommunitySubscriberUpdateManyWithWhereWithoutCommunityInput[]
    deleteMany?: CommunitySubscriberScalarWhereInput | CommunitySubscriberScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCommunitySubscriberInput = {
    create?: XOR<UserCreateWithoutCommunitySubscriberInput, UserUncheckedCreateWithoutCommunitySubscriberInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommunitySubscriberInput
    connect?: UserWhereUniqueInput
  }

  export type CommunityCreateNestedOneWithoutCommunitySubscriberInput = {
    create?: XOR<CommunityCreateWithoutCommunitySubscriberInput, CommunityUncheckedCreateWithoutCommunitySubscriberInput>
    connectOrCreate?: CommunityCreateOrConnectWithoutCommunitySubscriberInput
    connect?: CommunityWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCommunitySubscriberNestedInput = {
    create?: XOR<UserCreateWithoutCommunitySubscriberInput, UserUncheckedCreateWithoutCommunitySubscriberInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommunitySubscriberInput
    upsert?: UserUpsertWithoutCommunitySubscriberInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommunitySubscriberInput, UserUpdateWithoutCommunitySubscriberInput>, UserUncheckedUpdateWithoutCommunitySubscriberInput>
  }

  export type CommunityUpdateOneRequiredWithoutCommunitySubscriberNestedInput = {
    create?: XOR<CommunityCreateWithoutCommunitySubscriberInput, CommunityUncheckedCreateWithoutCommunitySubscriberInput>
    connectOrCreate?: CommunityCreateOrConnectWithoutCommunitySubscriberInput
    upsert?: CommunityUpsertWithoutCommunitySubscriberInput
    connect?: CommunityWhereUniqueInput
    update?: XOR<XOR<CommunityUpdateToOneWithWhereWithoutCommunitySubscriberInput, CommunityUpdateWithoutCommunitySubscriberInput>, CommunityUncheckedUpdateWithoutCommunitySubscriberInput>
  }

  export type CommentParentChildrenCreateNestedManyWithoutParentInput = {
    create?: XOR<CommentParentChildrenCreateWithoutParentInput, CommentParentChildrenUncheckedCreateWithoutParentInput> | CommentParentChildrenCreateWithoutParentInput[] | CommentParentChildrenUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CommentParentChildrenCreateOrConnectWithoutParentInput | CommentParentChildrenCreateOrConnectWithoutParentInput[]
    createMany?: CommentParentChildrenCreateManyParentInputEnvelope
    connect?: CommentParentChildrenWhereUniqueInput | CommentParentChildrenWhereUniqueInput[]
  }

  export type CommentVoteCreateNestedManyWithoutCommentInput = {
    create?: XOR<CommentVoteCreateWithoutCommentInput, CommentVoteUncheckedCreateWithoutCommentInput> | CommentVoteCreateWithoutCommentInput[] | CommentVoteUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: CommentVoteCreateOrConnectWithoutCommentInput | CommentVoteCreateOrConnectWithoutCommentInput[]
    createMany?: CommentVoteCreateManyCommentInputEnvelope
    connect?: CommentVoteWhereUniqueInput | CommentVoteWhereUniqueInput[]
  }

  export type CommentParentChildrenUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<CommentParentChildrenCreateWithoutParentInput, CommentParentChildrenUncheckedCreateWithoutParentInput> | CommentParentChildrenCreateWithoutParentInput[] | CommentParentChildrenUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CommentParentChildrenCreateOrConnectWithoutParentInput | CommentParentChildrenCreateOrConnectWithoutParentInput[]
    createMany?: CommentParentChildrenCreateManyParentInputEnvelope
    connect?: CommentParentChildrenWhereUniqueInput | CommentParentChildrenWhereUniqueInput[]
  }

  export type CommentVoteUncheckedCreateNestedManyWithoutCommentInput = {
    create?: XOR<CommentVoteCreateWithoutCommentInput, CommentVoteUncheckedCreateWithoutCommentInput> | CommentVoteCreateWithoutCommentInput[] | CommentVoteUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: CommentVoteCreateOrConnectWithoutCommentInput | CommentVoteCreateOrConnectWithoutCommentInput[]
    createMany?: CommentVoteCreateManyCommentInputEnvelope
    connect?: CommentVoteWhereUniqueInput | CommentVoteWhereUniqueInput[]
  }

  export type CommentParentChildrenUpdateManyWithoutParentNestedInput = {
    create?: XOR<CommentParentChildrenCreateWithoutParentInput, CommentParentChildrenUncheckedCreateWithoutParentInput> | CommentParentChildrenCreateWithoutParentInput[] | CommentParentChildrenUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CommentParentChildrenCreateOrConnectWithoutParentInput | CommentParentChildrenCreateOrConnectWithoutParentInput[]
    upsert?: CommentParentChildrenUpsertWithWhereUniqueWithoutParentInput | CommentParentChildrenUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: CommentParentChildrenCreateManyParentInputEnvelope
    set?: CommentParentChildrenWhereUniqueInput | CommentParentChildrenWhereUniqueInput[]
    disconnect?: CommentParentChildrenWhereUniqueInput | CommentParentChildrenWhereUniqueInput[]
    delete?: CommentParentChildrenWhereUniqueInput | CommentParentChildrenWhereUniqueInput[]
    connect?: CommentParentChildrenWhereUniqueInput | CommentParentChildrenWhereUniqueInput[]
    update?: CommentParentChildrenUpdateWithWhereUniqueWithoutParentInput | CommentParentChildrenUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: CommentParentChildrenUpdateManyWithWhereWithoutParentInput | CommentParentChildrenUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: CommentParentChildrenScalarWhereInput | CommentParentChildrenScalarWhereInput[]
  }

  export type CommentVoteUpdateManyWithoutCommentNestedInput = {
    create?: XOR<CommentVoteCreateWithoutCommentInput, CommentVoteUncheckedCreateWithoutCommentInput> | CommentVoteCreateWithoutCommentInput[] | CommentVoteUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: CommentVoteCreateOrConnectWithoutCommentInput | CommentVoteCreateOrConnectWithoutCommentInput[]
    upsert?: CommentVoteUpsertWithWhereUniqueWithoutCommentInput | CommentVoteUpsertWithWhereUniqueWithoutCommentInput[]
    createMany?: CommentVoteCreateManyCommentInputEnvelope
    set?: CommentVoteWhereUniqueInput | CommentVoteWhereUniqueInput[]
    disconnect?: CommentVoteWhereUniqueInput | CommentVoteWhereUniqueInput[]
    delete?: CommentVoteWhereUniqueInput | CommentVoteWhereUniqueInput[]
    connect?: CommentVoteWhereUniqueInput | CommentVoteWhereUniqueInput[]
    update?: CommentVoteUpdateWithWhereUniqueWithoutCommentInput | CommentVoteUpdateWithWhereUniqueWithoutCommentInput[]
    updateMany?: CommentVoteUpdateManyWithWhereWithoutCommentInput | CommentVoteUpdateManyWithWhereWithoutCommentInput[]
    deleteMany?: CommentVoteScalarWhereInput | CommentVoteScalarWhereInput[]
  }

  export type CommentParentChildrenUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<CommentParentChildrenCreateWithoutParentInput, CommentParentChildrenUncheckedCreateWithoutParentInput> | CommentParentChildrenCreateWithoutParentInput[] | CommentParentChildrenUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CommentParentChildrenCreateOrConnectWithoutParentInput | CommentParentChildrenCreateOrConnectWithoutParentInput[]
    upsert?: CommentParentChildrenUpsertWithWhereUniqueWithoutParentInput | CommentParentChildrenUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: CommentParentChildrenCreateManyParentInputEnvelope
    set?: CommentParentChildrenWhereUniqueInput | CommentParentChildrenWhereUniqueInput[]
    disconnect?: CommentParentChildrenWhereUniqueInput | CommentParentChildrenWhereUniqueInput[]
    delete?: CommentParentChildrenWhereUniqueInput | CommentParentChildrenWhereUniqueInput[]
    connect?: CommentParentChildrenWhereUniqueInput | CommentParentChildrenWhereUniqueInput[]
    update?: CommentParentChildrenUpdateWithWhereUniqueWithoutParentInput | CommentParentChildrenUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: CommentParentChildrenUpdateManyWithWhereWithoutParentInput | CommentParentChildrenUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: CommentParentChildrenScalarWhereInput | CommentParentChildrenScalarWhereInput[]
  }

  export type CommentVoteUncheckedUpdateManyWithoutCommentNestedInput = {
    create?: XOR<CommentVoteCreateWithoutCommentInput, CommentVoteUncheckedCreateWithoutCommentInput> | CommentVoteCreateWithoutCommentInput[] | CommentVoteUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: CommentVoteCreateOrConnectWithoutCommentInput | CommentVoteCreateOrConnectWithoutCommentInput[]
    upsert?: CommentVoteUpsertWithWhereUniqueWithoutCommentInput | CommentVoteUpsertWithWhereUniqueWithoutCommentInput[]
    createMany?: CommentVoteCreateManyCommentInputEnvelope
    set?: CommentVoteWhereUniqueInput | CommentVoteWhereUniqueInput[]
    disconnect?: CommentVoteWhereUniqueInput | CommentVoteWhereUniqueInput[]
    delete?: CommentVoteWhereUniqueInput | CommentVoteWhereUniqueInput[]
    connect?: CommentVoteWhereUniqueInput | CommentVoteWhereUniqueInput[]
    update?: CommentVoteUpdateWithWhereUniqueWithoutCommentInput | CommentVoteUpdateWithWhereUniqueWithoutCommentInput[]
    updateMany?: CommentVoteUpdateManyWithWhereWithoutCommentInput | CommentVoteUpdateManyWithWhereWithoutCommentInput[]
    deleteMany?: CommentVoteScalarWhereInput | CommentVoteScalarWhereInput[]
  }

  export type CommentCreateNestedOneWithoutCommentVoteInput = {
    create?: XOR<CommentCreateWithoutCommentVoteInput, CommentUncheckedCreateWithoutCommentVoteInput>
    connectOrCreate?: CommentCreateOrConnectWithoutCommentVoteInput
    connect?: CommentWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCommentVoteInput = {
    create?: XOR<UserCreateWithoutCommentVoteInput, UserUncheckedCreateWithoutCommentVoteInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentVoteInput
    connect?: UserWhereUniqueInput
  }

  export type CommentUpdateOneRequiredWithoutCommentVoteNestedInput = {
    create?: XOR<CommentCreateWithoutCommentVoteInput, CommentUncheckedCreateWithoutCommentVoteInput>
    connectOrCreate?: CommentCreateOrConnectWithoutCommentVoteInput
    upsert?: CommentUpsertWithoutCommentVoteInput
    connect?: CommentWhereUniqueInput
    update?: XOR<XOR<CommentUpdateToOneWithWhereWithoutCommentVoteInput, CommentUpdateWithoutCommentVoteInput>, CommentUncheckedUpdateWithoutCommentVoteInput>
  }

  export type UserUpdateOneRequiredWithoutCommentVoteNestedInput = {
    create?: XOR<UserCreateWithoutCommentVoteInput, UserUncheckedCreateWithoutCommentVoteInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentVoteInput
    upsert?: UserUpsertWithoutCommentVoteInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommentVoteInput, UserUpdateWithoutCommentVoteInput>, UserUncheckedUpdateWithoutCommentVoteInput>
  }

  export type CommentCreateNestedOneWithoutParentInput = {
    create?: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput>
    connectOrCreate?: CommentCreateOrConnectWithoutParentInput
    connect?: CommentWhereUniqueInput
  }

  export type CommentUpdateOneWithoutParentNestedInput = {
    create?: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput>
    connectOrCreate?: CommentCreateOrConnectWithoutParentInput
    upsert?: CommentUpsertWithoutParentInput
    disconnect?: CommentWhereInput | boolean
    delete?: CommentWhereInput | boolean
    connect?: CommentWhereUniqueInput
    update?: XOR<XOR<CommentUpdateToOneWithWhereWithoutParentInput, CommentUpdateWithoutParentInput>, CommentUncheckedUpdateWithoutParentInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type PostCreateWithoutUserInput = {
    title: string
    content: string
    imageUrl?: string | null
    commentCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    community: CommunityCreateNestedOneWithoutPostsInput
    postVote?: PostVoteCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    content: string
    imageUrl?: string | null
    commentCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    communityId: number
    postVote?: PostVoteUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutUserInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput>
  }

  export type PostCreateManyUserInputEnvelope = {
    data: PostCreateManyUserInput | PostCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CommunityCreateWithoutAdminInput = {
    name: string
    bio: string
    subscriberCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostCreateNestedManyWithoutCommunityInput
    communitySubscriber?: CommunitySubscriberCreateNestedManyWithoutCommunityInput
  }

  export type CommunityUncheckedCreateWithoutAdminInput = {
    id?: number
    name: string
    bio: string
    subscriberCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostUncheckedCreateNestedManyWithoutCommunityInput
    communitySubscriber?: CommunitySubscriberUncheckedCreateNestedManyWithoutCommunityInput
  }

  export type CommunityCreateOrConnectWithoutAdminInput = {
    where: CommunityWhereUniqueInput
    create: XOR<CommunityCreateWithoutAdminInput, CommunityUncheckedCreateWithoutAdminInput>
  }

  export type CommunityCreateManyAdminInputEnvelope = {
    data: CommunityCreateManyAdminInput | CommunityCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type PostVoteCreateWithoutUserInput = {
    upvote?: boolean
    downvot?: boolean
    post: PostCreateNestedOneWithoutPostVoteInput
  }

  export type PostVoteUncheckedCreateWithoutUserInput = {
    id?: number
    upvote?: boolean
    downvot?: boolean
    postId: number
  }

  export type PostVoteCreateOrConnectWithoutUserInput = {
    where: PostVoteWhereUniqueInput
    create: XOR<PostVoteCreateWithoutUserInput, PostVoteUncheckedCreateWithoutUserInput>
  }

  export type PostVoteCreateManyUserInputEnvelope = {
    data: PostVoteCreateManyUserInput | PostVoteCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CommunitySubscriberCreateWithoutUserInput = {
    community: CommunityCreateNestedOneWithoutCommunitySubscriberInput
  }

  export type CommunitySubscriberUncheckedCreateWithoutUserInput = {
    id?: number
    communityId: number
  }

  export type CommunitySubscriberCreateOrConnectWithoutUserInput = {
    where: CommunitySubscriberWhereUniqueInput
    create: XOR<CommunitySubscriberCreateWithoutUserInput, CommunitySubscriberUncheckedCreateWithoutUserInput>
  }

  export type CommunitySubscriberCreateManyUserInputEnvelope = {
    data: CommunitySubscriberCreateManyUserInput | CommunitySubscriberCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CommentVoteCreateWithoutUserInput = {
    upvote?: boolean
    downvot?: boolean
    comment: CommentCreateNestedOneWithoutCommentVoteInput
  }

  export type CommentVoteUncheckedCreateWithoutUserInput = {
    id?: number
    upvote?: boolean
    downvot?: boolean
    commentId: number
  }

  export type CommentVoteCreateOrConnectWithoutUserInput = {
    where: CommentVoteWhereUniqueInput
    create: XOR<CommentVoteCreateWithoutUserInput, CommentVoteUncheckedCreateWithoutUserInput>
  }

  export type CommentVoteCreateManyUserInputEnvelope = {
    data: CommentVoteCreateManyUserInput | CommentVoteCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PostUpsertWithWhereUniqueWithoutUserInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutUserInput, PostUncheckedUpdateWithoutUserInput>
    create: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput>
  }

  export type PostUpdateWithWhereUniqueWithoutUserInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutUserInput, PostUncheckedUpdateWithoutUserInput>
  }

  export type PostUpdateManyWithWhereWithoutUserInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutUserInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    id?: IntFilter<"Post"> | number
    title?: StringFilter<"Post"> | string
    content?: StringFilter<"Post"> | string
    imageUrl?: StringNullableFilter<"Post"> | string | null
    commentCount?: IntFilter<"Post"> | number
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    userId?: IntFilter<"Post"> | number
    communityId?: IntFilter<"Post"> | number
  }

  export type CommunityUpsertWithWhereUniqueWithoutAdminInput = {
    where: CommunityWhereUniqueInput
    update: XOR<CommunityUpdateWithoutAdminInput, CommunityUncheckedUpdateWithoutAdminInput>
    create: XOR<CommunityCreateWithoutAdminInput, CommunityUncheckedCreateWithoutAdminInput>
  }

  export type CommunityUpdateWithWhereUniqueWithoutAdminInput = {
    where: CommunityWhereUniqueInput
    data: XOR<CommunityUpdateWithoutAdminInput, CommunityUncheckedUpdateWithoutAdminInput>
  }

  export type CommunityUpdateManyWithWhereWithoutAdminInput = {
    where: CommunityScalarWhereInput
    data: XOR<CommunityUpdateManyMutationInput, CommunityUncheckedUpdateManyWithoutAdminInput>
  }

  export type CommunityScalarWhereInput = {
    AND?: CommunityScalarWhereInput | CommunityScalarWhereInput[]
    OR?: CommunityScalarWhereInput[]
    NOT?: CommunityScalarWhereInput | CommunityScalarWhereInput[]
    id?: IntFilter<"Community"> | number
    adminId?: IntFilter<"Community"> | number
    name?: StringFilter<"Community"> | string
    bio?: StringFilter<"Community"> | string
    subscriberCount?: IntFilter<"Community"> | number
    createdAt?: DateTimeFilter<"Community"> | Date | string
    updatedAt?: DateTimeFilter<"Community"> | Date | string
  }

  export type PostVoteUpsertWithWhereUniqueWithoutUserInput = {
    where: PostVoteWhereUniqueInput
    update: XOR<PostVoteUpdateWithoutUserInput, PostVoteUncheckedUpdateWithoutUserInput>
    create: XOR<PostVoteCreateWithoutUserInput, PostVoteUncheckedCreateWithoutUserInput>
  }

  export type PostVoteUpdateWithWhereUniqueWithoutUserInput = {
    where: PostVoteWhereUniqueInput
    data: XOR<PostVoteUpdateWithoutUserInput, PostVoteUncheckedUpdateWithoutUserInput>
  }

  export type PostVoteUpdateManyWithWhereWithoutUserInput = {
    where: PostVoteScalarWhereInput
    data: XOR<PostVoteUpdateManyMutationInput, PostVoteUncheckedUpdateManyWithoutUserInput>
  }

  export type PostVoteScalarWhereInput = {
    AND?: PostVoteScalarWhereInput | PostVoteScalarWhereInput[]
    OR?: PostVoteScalarWhereInput[]
    NOT?: PostVoteScalarWhereInput | PostVoteScalarWhereInput[]
    id?: IntFilter<"PostVote"> | number
    upvote?: BoolFilter<"PostVote"> | boolean
    downvot?: BoolFilter<"PostVote"> | boolean
    postId?: IntFilter<"PostVote"> | number
    userId?: IntFilter<"PostVote"> | number
  }

  export type CommunitySubscriberUpsertWithWhereUniqueWithoutUserInput = {
    where: CommunitySubscriberWhereUniqueInput
    update: XOR<CommunitySubscriberUpdateWithoutUserInput, CommunitySubscriberUncheckedUpdateWithoutUserInput>
    create: XOR<CommunitySubscriberCreateWithoutUserInput, CommunitySubscriberUncheckedCreateWithoutUserInput>
  }

  export type CommunitySubscriberUpdateWithWhereUniqueWithoutUserInput = {
    where: CommunitySubscriberWhereUniqueInput
    data: XOR<CommunitySubscriberUpdateWithoutUserInput, CommunitySubscriberUncheckedUpdateWithoutUserInput>
  }

  export type CommunitySubscriberUpdateManyWithWhereWithoutUserInput = {
    where: CommunitySubscriberScalarWhereInput
    data: XOR<CommunitySubscriberUpdateManyMutationInput, CommunitySubscriberUncheckedUpdateManyWithoutUserInput>
  }

  export type CommunitySubscriberScalarWhereInput = {
    AND?: CommunitySubscriberScalarWhereInput | CommunitySubscriberScalarWhereInput[]
    OR?: CommunitySubscriberScalarWhereInput[]
    NOT?: CommunitySubscriberScalarWhereInput | CommunitySubscriberScalarWhereInput[]
    id?: IntFilter<"CommunitySubscriber"> | number
    userId?: IntFilter<"CommunitySubscriber"> | number
    communityId?: IntFilter<"CommunitySubscriber"> | number
  }

  export type CommentVoteUpsertWithWhereUniqueWithoutUserInput = {
    where: CommentVoteWhereUniqueInput
    update: XOR<CommentVoteUpdateWithoutUserInput, CommentVoteUncheckedUpdateWithoutUserInput>
    create: XOR<CommentVoteCreateWithoutUserInput, CommentVoteUncheckedCreateWithoutUserInput>
  }

  export type CommentVoteUpdateWithWhereUniqueWithoutUserInput = {
    where: CommentVoteWhereUniqueInput
    data: XOR<CommentVoteUpdateWithoutUserInput, CommentVoteUncheckedUpdateWithoutUserInput>
  }

  export type CommentVoteUpdateManyWithWhereWithoutUserInput = {
    where: CommentVoteScalarWhereInput
    data: XOR<CommentVoteUpdateManyMutationInput, CommentVoteUncheckedUpdateManyWithoutUserInput>
  }

  export type CommentVoteScalarWhereInput = {
    AND?: CommentVoteScalarWhereInput | CommentVoteScalarWhereInput[]
    OR?: CommentVoteScalarWhereInput[]
    NOT?: CommentVoteScalarWhereInput | CommentVoteScalarWhereInput[]
    id?: IntFilter<"CommentVote"> | number
    upvote?: BoolFilter<"CommentVote"> | boolean
    downvot?: BoolFilter<"CommentVote"> | boolean
    commentId?: IntFilter<"CommentVote"> | number
    userId?: IntFilter<"CommentVote"> | number
  }

  export type UserCreateWithoutPostsInput = {
    username: string
    email: string
    password: string
    image?: string | null
    isAdmin?: boolean
    communities?: CommunityCreateNestedManyWithoutAdminInput
    postVote?: PostVoteCreateNestedManyWithoutUserInput
    communitySubscriber?: CommunitySubscriberCreateNestedManyWithoutUserInput
    commentVote?: CommentVoteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    id?: number
    username: string
    email: string
    password: string
    image?: string | null
    isAdmin?: boolean
    communities?: CommunityUncheckedCreateNestedManyWithoutAdminInput
    postVote?: PostVoteUncheckedCreateNestedManyWithoutUserInput
    communitySubscriber?: CommunitySubscriberUncheckedCreateNestedManyWithoutUserInput
    commentVote?: CommentVoteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type CommunityCreateWithoutPostsInput = {
    name: string
    bio: string
    subscriberCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    admin: UserCreateNestedOneWithoutCommunitiesInput
    communitySubscriber?: CommunitySubscriberCreateNestedManyWithoutCommunityInput
  }

  export type CommunityUncheckedCreateWithoutPostsInput = {
    id?: number
    adminId: number
    name: string
    bio: string
    subscriberCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    communitySubscriber?: CommunitySubscriberUncheckedCreateNestedManyWithoutCommunityInput
  }

  export type CommunityCreateOrConnectWithoutPostsInput = {
    where: CommunityWhereUniqueInput
    create: XOR<CommunityCreateWithoutPostsInput, CommunityUncheckedCreateWithoutPostsInput>
  }

  export type PostVoteCreateWithoutPostInput = {
    upvote?: boolean
    downvot?: boolean
    user: UserCreateNestedOneWithoutPostVoteInput
  }

  export type PostVoteUncheckedCreateWithoutPostInput = {
    id?: number
    upvote?: boolean
    downvot?: boolean
    userId: number
  }

  export type PostVoteCreateOrConnectWithoutPostInput = {
    where: PostVoteWhereUniqueInput
    create: XOR<PostVoteCreateWithoutPostInput, PostVoteUncheckedCreateWithoutPostInput>
  }

  export type PostVoteCreateManyPostInputEnvelope = {
    data: PostVoteCreateManyPostInput | PostVoteCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    communities?: CommunityUpdateManyWithoutAdminNestedInput
    postVote?: PostVoteUpdateManyWithoutUserNestedInput
    communitySubscriber?: CommunitySubscriberUpdateManyWithoutUserNestedInput
    commentVote?: CommentVoteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    communities?: CommunityUncheckedUpdateManyWithoutAdminNestedInput
    postVote?: PostVoteUncheckedUpdateManyWithoutUserNestedInput
    communitySubscriber?: CommunitySubscriberUncheckedUpdateManyWithoutUserNestedInput
    commentVote?: CommentVoteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CommunityUpsertWithoutPostsInput = {
    update: XOR<CommunityUpdateWithoutPostsInput, CommunityUncheckedUpdateWithoutPostsInput>
    create: XOR<CommunityCreateWithoutPostsInput, CommunityUncheckedCreateWithoutPostsInput>
    where?: CommunityWhereInput
  }

  export type CommunityUpdateToOneWithWhereWithoutPostsInput = {
    where?: CommunityWhereInput
    data: XOR<CommunityUpdateWithoutPostsInput, CommunityUncheckedUpdateWithoutPostsInput>
  }

  export type CommunityUpdateWithoutPostsInput = {
    name?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    subscriberCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: UserUpdateOneRequiredWithoutCommunitiesNestedInput
    communitySubscriber?: CommunitySubscriberUpdateManyWithoutCommunityNestedInput
  }

  export type CommunityUncheckedUpdateWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    adminId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    subscriberCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    communitySubscriber?: CommunitySubscriberUncheckedUpdateManyWithoutCommunityNestedInput
  }

  export type PostVoteUpsertWithWhereUniqueWithoutPostInput = {
    where: PostVoteWhereUniqueInput
    update: XOR<PostVoteUpdateWithoutPostInput, PostVoteUncheckedUpdateWithoutPostInput>
    create: XOR<PostVoteCreateWithoutPostInput, PostVoteUncheckedCreateWithoutPostInput>
  }

  export type PostVoteUpdateWithWhereUniqueWithoutPostInput = {
    where: PostVoteWhereUniqueInput
    data: XOR<PostVoteUpdateWithoutPostInput, PostVoteUncheckedUpdateWithoutPostInput>
  }

  export type PostVoteUpdateManyWithWhereWithoutPostInput = {
    where: PostVoteScalarWhereInput
    data: XOR<PostVoteUpdateManyMutationInput, PostVoteUncheckedUpdateManyWithoutPostInput>
  }

  export type PostCreateWithoutPostVoteInput = {
    title: string
    content: string
    imageUrl?: string | null
    commentCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPostsInput
    community: CommunityCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateWithoutPostVoteInput = {
    id?: number
    title: string
    content: string
    imageUrl?: string | null
    commentCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    communityId: number
  }

  export type PostCreateOrConnectWithoutPostVoteInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutPostVoteInput, PostUncheckedCreateWithoutPostVoteInput>
  }

  export type UserCreateWithoutPostVoteInput = {
    username: string
    email: string
    password: string
    image?: string | null
    isAdmin?: boolean
    posts?: PostCreateNestedManyWithoutUserInput
    communities?: CommunityCreateNestedManyWithoutAdminInput
    communitySubscriber?: CommunitySubscriberCreateNestedManyWithoutUserInput
    commentVote?: CommentVoteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPostVoteInput = {
    id?: number
    username: string
    email: string
    password: string
    image?: string | null
    isAdmin?: boolean
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    communities?: CommunityUncheckedCreateNestedManyWithoutAdminInput
    communitySubscriber?: CommunitySubscriberUncheckedCreateNestedManyWithoutUserInput
    commentVote?: CommentVoteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPostVoteInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostVoteInput, UserUncheckedCreateWithoutPostVoteInput>
  }

  export type PostUpsertWithoutPostVoteInput = {
    update: XOR<PostUpdateWithoutPostVoteInput, PostUncheckedUpdateWithoutPostVoteInput>
    create: XOR<PostCreateWithoutPostVoteInput, PostUncheckedCreateWithoutPostVoteInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutPostVoteInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutPostVoteInput, PostUncheckedUpdateWithoutPostVoteInput>
  }

  export type PostUpdateWithoutPostVoteInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    commentCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
    community?: CommunityUpdateOneRequiredWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateWithoutPostVoteInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    commentCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    communityId?: IntFieldUpdateOperationsInput | number
  }

  export type UserUpsertWithoutPostVoteInput = {
    update: XOR<UserUpdateWithoutPostVoteInput, UserUncheckedUpdateWithoutPostVoteInput>
    create: XOR<UserCreateWithoutPostVoteInput, UserUncheckedCreateWithoutPostVoteInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostVoteInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostVoteInput, UserUncheckedUpdateWithoutPostVoteInput>
  }

  export type UserUpdateWithoutPostVoteInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    posts?: PostUpdateManyWithoutUserNestedInput
    communities?: CommunityUpdateManyWithoutAdminNestedInput
    communitySubscriber?: CommunitySubscriberUpdateManyWithoutUserNestedInput
    commentVote?: CommentVoteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPostVoteInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    communities?: CommunityUncheckedUpdateManyWithoutAdminNestedInput
    communitySubscriber?: CommunitySubscriberUncheckedUpdateManyWithoutUserNestedInput
    commentVote?: CommentVoteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutCommunitiesInput = {
    username: string
    email: string
    password: string
    image?: string | null
    isAdmin?: boolean
    posts?: PostCreateNestedManyWithoutUserInput
    postVote?: PostVoteCreateNestedManyWithoutUserInput
    communitySubscriber?: CommunitySubscriberCreateNestedManyWithoutUserInput
    commentVote?: CommentVoteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCommunitiesInput = {
    id?: number
    username: string
    email: string
    password: string
    image?: string | null
    isAdmin?: boolean
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    postVote?: PostVoteUncheckedCreateNestedManyWithoutUserInput
    communitySubscriber?: CommunitySubscriberUncheckedCreateNestedManyWithoutUserInput
    commentVote?: CommentVoteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCommunitiesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommunitiesInput, UserUncheckedCreateWithoutCommunitiesInput>
  }

  export type PostCreateWithoutCommunityInput = {
    title: string
    content: string
    imageUrl?: string | null
    commentCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPostsInput
    postVote?: PostVoteCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutCommunityInput = {
    id?: number
    title: string
    content: string
    imageUrl?: string | null
    commentCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    postVote?: PostVoteUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutCommunityInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutCommunityInput, PostUncheckedCreateWithoutCommunityInput>
  }

  export type PostCreateManyCommunityInputEnvelope = {
    data: PostCreateManyCommunityInput | PostCreateManyCommunityInput[]
    skipDuplicates?: boolean
  }

  export type CommunitySubscriberCreateWithoutCommunityInput = {
    user: UserCreateNestedOneWithoutCommunitySubscriberInput
  }

  export type CommunitySubscriberUncheckedCreateWithoutCommunityInput = {
    id?: number
    userId: number
  }

  export type CommunitySubscriberCreateOrConnectWithoutCommunityInput = {
    where: CommunitySubscriberWhereUniqueInput
    create: XOR<CommunitySubscriberCreateWithoutCommunityInput, CommunitySubscriberUncheckedCreateWithoutCommunityInput>
  }

  export type CommunitySubscriberCreateManyCommunityInputEnvelope = {
    data: CommunitySubscriberCreateManyCommunityInput | CommunitySubscriberCreateManyCommunityInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCommunitiesInput = {
    update: XOR<UserUpdateWithoutCommunitiesInput, UserUncheckedUpdateWithoutCommunitiesInput>
    create: XOR<UserCreateWithoutCommunitiesInput, UserUncheckedCreateWithoutCommunitiesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommunitiesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommunitiesInput, UserUncheckedUpdateWithoutCommunitiesInput>
  }

  export type UserUpdateWithoutCommunitiesInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    posts?: PostUpdateManyWithoutUserNestedInput
    postVote?: PostVoteUpdateManyWithoutUserNestedInput
    communitySubscriber?: CommunitySubscriberUpdateManyWithoutUserNestedInput
    commentVote?: CommentVoteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCommunitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    postVote?: PostVoteUncheckedUpdateManyWithoutUserNestedInput
    communitySubscriber?: CommunitySubscriberUncheckedUpdateManyWithoutUserNestedInput
    commentVote?: CommentVoteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PostUpsertWithWhereUniqueWithoutCommunityInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutCommunityInput, PostUncheckedUpdateWithoutCommunityInput>
    create: XOR<PostCreateWithoutCommunityInput, PostUncheckedCreateWithoutCommunityInput>
  }

  export type PostUpdateWithWhereUniqueWithoutCommunityInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutCommunityInput, PostUncheckedUpdateWithoutCommunityInput>
  }

  export type PostUpdateManyWithWhereWithoutCommunityInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutCommunityInput>
  }

  export type CommunitySubscriberUpsertWithWhereUniqueWithoutCommunityInput = {
    where: CommunitySubscriberWhereUniqueInput
    update: XOR<CommunitySubscriberUpdateWithoutCommunityInput, CommunitySubscriberUncheckedUpdateWithoutCommunityInput>
    create: XOR<CommunitySubscriberCreateWithoutCommunityInput, CommunitySubscriberUncheckedCreateWithoutCommunityInput>
  }

  export type CommunitySubscriberUpdateWithWhereUniqueWithoutCommunityInput = {
    where: CommunitySubscriberWhereUniqueInput
    data: XOR<CommunitySubscriberUpdateWithoutCommunityInput, CommunitySubscriberUncheckedUpdateWithoutCommunityInput>
  }

  export type CommunitySubscriberUpdateManyWithWhereWithoutCommunityInput = {
    where: CommunitySubscriberScalarWhereInput
    data: XOR<CommunitySubscriberUpdateManyMutationInput, CommunitySubscriberUncheckedUpdateManyWithoutCommunityInput>
  }

  export type UserCreateWithoutCommunitySubscriberInput = {
    username: string
    email: string
    password: string
    image?: string | null
    isAdmin?: boolean
    posts?: PostCreateNestedManyWithoutUserInput
    communities?: CommunityCreateNestedManyWithoutAdminInput
    postVote?: PostVoteCreateNestedManyWithoutUserInput
    commentVote?: CommentVoteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCommunitySubscriberInput = {
    id?: number
    username: string
    email: string
    password: string
    image?: string | null
    isAdmin?: boolean
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    communities?: CommunityUncheckedCreateNestedManyWithoutAdminInput
    postVote?: PostVoteUncheckedCreateNestedManyWithoutUserInput
    commentVote?: CommentVoteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCommunitySubscriberInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommunitySubscriberInput, UserUncheckedCreateWithoutCommunitySubscriberInput>
  }

  export type CommunityCreateWithoutCommunitySubscriberInput = {
    name: string
    bio: string
    subscriberCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    admin: UserCreateNestedOneWithoutCommunitiesInput
    posts?: PostCreateNestedManyWithoutCommunityInput
  }

  export type CommunityUncheckedCreateWithoutCommunitySubscriberInput = {
    id?: number
    adminId: number
    name: string
    bio: string
    subscriberCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostUncheckedCreateNestedManyWithoutCommunityInput
  }

  export type CommunityCreateOrConnectWithoutCommunitySubscriberInput = {
    where: CommunityWhereUniqueInput
    create: XOR<CommunityCreateWithoutCommunitySubscriberInput, CommunityUncheckedCreateWithoutCommunitySubscriberInput>
  }

  export type UserUpsertWithoutCommunitySubscriberInput = {
    update: XOR<UserUpdateWithoutCommunitySubscriberInput, UserUncheckedUpdateWithoutCommunitySubscriberInput>
    create: XOR<UserCreateWithoutCommunitySubscriberInput, UserUncheckedCreateWithoutCommunitySubscriberInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommunitySubscriberInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommunitySubscriberInput, UserUncheckedUpdateWithoutCommunitySubscriberInput>
  }

  export type UserUpdateWithoutCommunitySubscriberInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    posts?: PostUpdateManyWithoutUserNestedInput
    communities?: CommunityUpdateManyWithoutAdminNestedInput
    postVote?: PostVoteUpdateManyWithoutUserNestedInput
    commentVote?: CommentVoteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCommunitySubscriberInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    communities?: CommunityUncheckedUpdateManyWithoutAdminNestedInput
    postVote?: PostVoteUncheckedUpdateManyWithoutUserNestedInput
    commentVote?: CommentVoteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CommunityUpsertWithoutCommunitySubscriberInput = {
    update: XOR<CommunityUpdateWithoutCommunitySubscriberInput, CommunityUncheckedUpdateWithoutCommunitySubscriberInput>
    create: XOR<CommunityCreateWithoutCommunitySubscriberInput, CommunityUncheckedCreateWithoutCommunitySubscriberInput>
    where?: CommunityWhereInput
  }

  export type CommunityUpdateToOneWithWhereWithoutCommunitySubscriberInput = {
    where?: CommunityWhereInput
    data: XOR<CommunityUpdateWithoutCommunitySubscriberInput, CommunityUncheckedUpdateWithoutCommunitySubscriberInput>
  }

  export type CommunityUpdateWithoutCommunitySubscriberInput = {
    name?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    subscriberCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: UserUpdateOneRequiredWithoutCommunitiesNestedInput
    posts?: PostUpdateManyWithoutCommunityNestedInput
  }

  export type CommunityUncheckedUpdateWithoutCommunitySubscriberInput = {
    id?: IntFieldUpdateOperationsInput | number
    adminId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    subscriberCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUncheckedUpdateManyWithoutCommunityNestedInput
  }

  export type CommentParentChildrenCreateWithoutParentInput = {
    commentId: number
  }

  export type CommentParentChildrenUncheckedCreateWithoutParentInput = {
    id?: number
    commentId: number
  }

  export type CommentParentChildrenCreateOrConnectWithoutParentInput = {
    where: CommentParentChildrenWhereUniqueInput
    create: XOR<CommentParentChildrenCreateWithoutParentInput, CommentParentChildrenUncheckedCreateWithoutParentInput>
  }

  export type CommentParentChildrenCreateManyParentInputEnvelope = {
    data: CommentParentChildrenCreateManyParentInput | CommentParentChildrenCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type CommentVoteCreateWithoutCommentInput = {
    upvote?: boolean
    downvot?: boolean
    user: UserCreateNestedOneWithoutCommentVoteInput
  }

  export type CommentVoteUncheckedCreateWithoutCommentInput = {
    id?: number
    upvote?: boolean
    downvot?: boolean
    userId: number
  }

  export type CommentVoteCreateOrConnectWithoutCommentInput = {
    where: CommentVoteWhereUniqueInput
    create: XOR<CommentVoteCreateWithoutCommentInput, CommentVoteUncheckedCreateWithoutCommentInput>
  }

  export type CommentVoteCreateManyCommentInputEnvelope = {
    data: CommentVoteCreateManyCommentInput | CommentVoteCreateManyCommentInput[]
    skipDuplicates?: boolean
  }

  export type CommentParentChildrenUpsertWithWhereUniqueWithoutParentInput = {
    where: CommentParentChildrenWhereUniqueInput
    update: XOR<CommentParentChildrenUpdateWithoutParentInput, CommentParentChildrenUncheckedUpdateWithoutParentInput>
    create: XOR<CommentParentChildrenCreateWithoutParentInput, CommentParentChildrenUncheckedCreateWithoutParentInput>
  }

  export type CommentParentChildrenUpdateWithWhereUniqueWithoutParentInput = {
    where: CommentParentChildrenWhereUniqueInput
    data: XOR<CommentParentChildrenUpdateWithoutParentInput, CommentParentChildrenUncheckedUpdateWithoutParentInput>
  }

  export type CommentParentChildrenUpdateManyWithWhereWithoutParentInput = {
    where: CommentParentChildrenScalarWhereInput
    data: XOR<CommentParentChildrenUpdateManyMutationInput, CommentParentChildrenUncheckedUpdateManyWithoutParentInput>
  }

  export type CommentParentChildrenScalarWhereInput = {
    AND?: CommentParentChildrenScalarWhereInput | CommentParentChildrenScalarWhereInput[]
    OR?: CommentParentChildrenScalarWhereInput[]
    NOT?: CommentParentChildrenScalarWhereInput | CommentParentChildrenScalarWhereInput[]
    id?: IntFilter<"CommentParentChildren"> | number
    commentId?: IntFilter<"CommentParentChildren"> | number
    parentCommentId?: IntFilter<"CommentParentChildren"> | number
  }

  export type CommentVoteUpsertWithWhereUniqueWithoutCommentInput = {
    where: CommentVoteWhereUniqueInput
    update: XOR<CommentVoteUpdateWithoutCommentInput, CommentVoteUncheckedUpdateWithoutCommentInput>
    create: XOR<CommentVoteCreateWithoutCommentInput, CommentVoteUncheckedCreateWithoutCommentInput>
  }

  export type CommentVoteUpdateWithWhereUniqueWithoutCommentInput = {
    where: CommentVoteWhereUniqueInput
    data: XOR<CommentVoteUpdateWithoutCommentInput, CommentVoteUncheckedUpdateWithoutCommentInput>
  }

  export type CommentVoteUpdateManyWithWhereWithoutCommentInput = {
    where: CommentVoteScalarWhereInput
    data: XOR<CommentVoteUpdateManyMutationInput, CommentVoteUncheckedUpdateManyWithoutCommentInput>
  }

  export type CommentCreateWithoutCommentVoteInput = {
    postId: number
    userId: number
    content: string
    parentCommentId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: CommentParentChildrenCreateNestedManyWithoutParentInput
  }

  export type CommentUncheckedCreateWithoutCommentVoteInput = {
    id?: number
    postId: number
    userId: number
    content: string
    parentCommentId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: CommentParentChildrenUncheckedCreateNestedManyWithoutParentInput
  }

  export type CommentCreateOrConnectWithoutCommentVoteInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutCommentVoteInput, CommentUncheckedCreateWithoutCommentVoteInput>
  }

  export type UserCreateWithoutCommentVoteInput = {
    username: string
    email: string
    password: string
    image?: string | null
    isAdmin?: boolean
    posts?: PostCreateNestedManyWithoutUserInput
    communities?: CommunityCreateNestedManyWithoutAdminInput
    postVote?: PostVoteCreateNestedManyWithoutUserInput
    communitySubscriber?: CommunitySubscriberCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCommentVoteInput = {
    id?: number
    username: string
    email: string
    password: string
    image?: string | null
    isAdmin?: boolean
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    communities?: CommunityUncheckedCreateNestedManyWithoutAdminInput
    postVote?: PostVoteUncheckedCreateNestedManyWithoutUserInput
    communitySubscriber?: CommunitySubscriberUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCommentVoteInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentVoteInput, UserUncheckedCreateWithoutCommentVoteInput>
  }

  export type CommentUpsertWithoutCommentVoteInput = {
    update: XOR<CommentUpdateWithoutCommentVoteInput, CommentUncheckedUpdateWithoutCommentVoteInput>
    create: XOR<CommentCreateWithoutCommentVoteInput, CommentUncheckedCreateWithoutCommentVoteInput>
    where?: CommentWhereInput
  }

  export type CommentUpdateToOneWithWhereWithoutCommentVoteInput = {
    where?: CommentWhereInput
    data: XOR<CommentUpdateWithoutCommentVoteInput, CommentUncheckedUpdateWithoutCommentVoteInput>
  }

  export type CommentUpdateWithoutCommentVoteInput = {
    postId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    parentCommentId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: CommentParentChildrenUpdateManyWithoutParentNestedInput
  }

  export type CommentUncheckedUpdateWithoutCommentVoteInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    parentCommentId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: CommentParentChildrenUncheckedUpdateManyWithoutParentNestedInput
  }

  export type UserUpsertWithoutCommentVoteInput = {
    update: XOR<UserUpdateWithoutCommentVoteInput, UserUncheckedUpdateWithoutCommentVoteInput>
    create: XOR<UserCreateWithoutCommentVoteInput, UserUncheckedCreateWithoutCommentVoteInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommentVoteInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommentVoteInput, UserUncheckedUpdateWithoutCommentVoteInput>
  }

  export type UserUpdateWithoutCommentVoteInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    posts?: PostUpdateManyWithoutUserNestedInput
    communities?: CommunityUpdateManyWithoutAdminNestedInput
    postVote?: PostVoteUpdateManyWithoutUserNestedInput
    communitySubscriber?: CommunitySubscriberUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCommentVoteInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    communities?: CommunityUncheckedUpdateManyWithoutAdminNestedInput
    postVote?: PostVoteUncheckedUpdateManyWithoutUserNestedInput
    communitySubscriber?: CommunitySubscriberUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CommentCreateWithoutParentInput = {
    postId: number
    userId: number
    content: string
    parentCommentId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    commentVote?: CommentVoteCreateNestedManyWithoutCommentInput
  }

  export type CommentUncheckedCreateWithoutParentInput = {
    id?: number
    postId: number
    userId: number
    content: string
    parentCommentId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    commentVote?: CommentVoteUncheckedCreateNestedManyWithoutCommentInput
  }

  export type CommentCreateOrConnectWithoutParentInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput>
  }

  export type CommentUpsertWithoutParentInput = {
    update: XOR<CommentUpdateWithoutParentInput, CommentUncheckedUpdateWithoutParentInput>
    create: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput>
    where?: CommentWhereInput
  }

  export type CommentUpdateToOneWithWhereWithoutParentInput = {
    where?: CommentWhereInput
    data: XOR<CommentUpdateWithoutParentInput, CommentUncheckedUpdateWithoutParentInput>
  }

  export type CommentUpdateWithoutParentInput = {
    postId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    parentCommentId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commentVote?: CommentVoteUpdateManyWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    parentCommentId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commentVote?: CommentVoteUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type PostCreateManyUserInput = {
    id?: number
    title: string
    content: string
    imageUrl?: string | null
    commentCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    communityId: number
  }

  export type CommunityCreateManyAdminInput = {
    id?: number
    name: string
    bio: string
    subscriberCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostVoteCreateManyUserInput = {
    id?: number
    upvote?: boolean
    downvot?: boolean
    postId: number
  }

  export type CommunitySubscriberCreateManyUserInput = {
    id?: number
    communityId: number
  }

  export type CommentVoteCreateManyUserInput = {
    id?: number
    upvote?: boolean
    downvot?: boolean
    commentId: number
  }

  export type PostUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    commentCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    community?: CommunityUpdateOneRequiredWithoutPostsNestedInput
    postVote?: PostVoteUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    commentCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    communityId?: IntFieldUpdateOperationsInput | number
    postVote?: PostVoteUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    commentCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    communityId?: IntFieldUpdateOperationsInput | number
  }

  export type CommunityUpdateWithoutAdminInput = {
    name?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    subscriberCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUpdateManyWithoutCommunityNestedInput
    communitySubscriber?: CommunitySubscriberUpdateManyWithoutCommunityNestedInput
  }

  export type CommunityUncheckedUpdateWithoutAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    subscriberCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUncheckedUpdateManyWithoutCommunityNestedInput
    communitySubscriber?: CommunitySubscriberUncheckedUpdateManyWithoutCommunityNestedInput
  }

  export type CommunityUncheckedUpdateManyWithoutAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    subscriberCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostVoteUpdateWithoutUserInput = {
    upvote?: BoolFieldUpdateOperationsInput | boolean
    downvot?: BoolFieldUpdateOperationsInput | boolean
    post?: PostUpdateOneRequiredWithoutPostVoteNestedInput
  }

  export type PostVoteUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    upvote?: BoolFieldUpdateOperationsInput | boolean
    downvot?: BoolFieldUpdateOperationsInput | boolean
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type PostVoteUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    upvote?: BoolFieldUpdateOperationsInput | boolean
    downvot?: BoolFieldUpdateOperationsInput | boolean
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type CommunitySubscriberUpdateWithoutUserInput = {
    community?: CommunityUpdateOneRequiredWithoutCommunitySubscriberNestedInput
  }

  export type CommunitySubscriberUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    communityId?: IntFieldUpdateOperationsInput | number
  }

  export type CommunitySubscriberUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    communityId?: IntFieldUpdateOperationsInput | number
  }

  export type CommentVoteUpdateWithoutUserInput = {
    upvote?: BoolFieldUpdateOperationsInput | boolean
    downvot?: BoolFieldUpdateOperationsInput | boolean
    comment?: CommentUpdateOneRequiredWithoutCommentVoteNestedInput
  }

  export type CommentVoteUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    upvote?: BoolFieldUpdateOperationsInput | boolean
    downvot?: BoolFieldUpdateOperationsInput | boolean
    commentId?: IntFieldUpdateOperationsInput | number
  }

  export type CommentVoteUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    upvote?: BoolFieldUpdateOperationsInput | boolean
    downvot?: BoolFieldUpdateOperationsInput | boolean
    commentId?: IntFieldUpdateOperationsInput | number
  }

  export type PostVoteCreateManyPostInput = {
    id?: number
    upvote?: boolean
    downvot?: boolean
    userId: number
  }

  export type PostVoteUpdateWithoutPostInput = {
    upvote?: BoolFieldUpdateOperationsInput | boolean
    downvot?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutPostVoteNestedInput
  }

  export type PostVoteUncheckedUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    upvote?: BoolFieldUpdateOperationsInput | boolean
    downvot?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type PostVoteUncheckedUpdateManyWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    upvote?: BoolFieldUpdateOperationsInput | boolean
    downvot?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type PostCreateManyCommunityInput = {
    id?: number
    title: string
    content: string
    imageUrl?: string | null
    commentCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
  }

  export type CommunitySubscriberCreateManyCommunityInput = {
    id?: number
    userId: number
  }

  export type PostUpdateWithoutCommunityInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    commentCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
    postVote?: PostVoteUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutCommunityInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    commentCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    postVote?: PostVoteUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateManyWithoutCommunityInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    commentCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type CommunitySubscriberUpdateWithoutCommunityInput = {
    user?: UserUpdateOneRequiredWithoutCommunitySubscriberNestedInput
  }

  export type CommunitySubscriberUncheckedUpdateWithoutCommunityInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type CommunitySubscriberUncheckedUpdateManyWithoutCommunityInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type CommentParentChildrenCreateManyParentInput = {
    id?: number
    commentId: number
  }

  export type CommentVoteCreateManyCommentInput = {
    id?: number
    upvote?: boolean
    downvot?: boolean
    userId: number
  }

  export type CommentParentChildrenUpdateWithoutParentInput = {
    commentId?: IntFieldUpdateOperationsInput | number
  }

  export type CommentParentChildrenUncheckedUpdateWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    commentId?: IntFieldUpdateOperationsInput | number
  }

  export type CommentParentChildrenUncheckedUpdateManyWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    commentId?: IntFieldUpdateOperationsInput | number
  }

  export type CommentVoteUpdateWithoutCommentInput = {
    upvote?: BoolFieldUpdateOperationsInput | boolean
    downvot?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutCommentVoteNestedInput
  }

  export type CommentVoteUncheckedUpdateWithoutCommentInput = {
    id?: IntFieldUpdateOperationsInput | number
    upvote?: BoolFieldUpdateOperationsInput | boolean
    downvot?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type CommentVoteUncheckedUpdateManyWithoutCommentInput = {
    id?: IntFieldUpdateOperationsInput | number
    upvote?: BoolFieldUpdateOperationsInput | boolean
    downvot?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PostCountOutputTypeDefaultArgs instead
     */
    export type PostCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PostCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CommunityCountOutputTypeDefaultArgs instead
     */
    export type CommunityCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CommunityCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CommentCountOutputTypeDefaultArgs instead
     */
    export type CommentCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CommentCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PostDefaultArgs instead
     */
    export type PostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PostDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PostVoteDefaultArgs instead
     */
    export type PostVoteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PostVoteDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CommunityDefaultArgs instead
     */
    export type CommunityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CommunityDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CommunitySubscriberDefaultArgs instead
     */
    export type CommunitySubscriberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CommunitySubscriberDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CommentDefaultArgs instead
     */
    export type CommentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CommentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CommentVoteDefaultArgs instead
     */
    export type CommentVoteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CommentVoteDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CommentParentChildrenDefaultArgs instead
     */
    export type CommentParentChildrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CommentParentChildrenDefaultArgs<ExtArgs>

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