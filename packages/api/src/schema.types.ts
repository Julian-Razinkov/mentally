import { GraphQLResolveInfo } from 'graphql';
import { InvocationContext } from './context';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export enum Mood {
  Angry = 'angry',
  Depressed = 'depressed',
  Frustrated = 'frustrated',
  Joyful = 'joyful',
  Neutral = 'neutral',
  Pleasant = 'pleasant'
}

export type MoodNote = {
  __typename?: 'MoodNote';
  id: Scalars['ID']['output'];
  mood: Mood;
  title: Scalars['String']['output'];
};

export type MoodNoteCreate = {
  mood: Mood;
  title: Scalars['String']['input'];
};

export type MoodNotePage = {
  __typename?: 'MoodNotePage';
  items: Array<MoodNote>;
  total: Scalars['Int']['output'];
};

export type MoodNoteUpdate = {
  mood?: InputMaybe<Mood>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  moodNoteCreate: Scalars['ID']['output'];
  moodNoteDelete: Scalars['ID']['output'];
  moodNoteUpdate: Scalars['ID']['output'];
};


export type MutationMoodNoteCreateArgs = {
  input: MoodNoteCreate;
};


export type MutationMoodNoteDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationMoodNoteUpdateArgs = {
  id: Scalars['ID']['input'];
  input: MoodNoteUpdate;
};

export type Page = {
  skip: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
};

export type Query = {
  __typename?: 'Query';
  moodNoteMany: MoodNotePage;
  moodNoteOne: MoodNote;
};


export type QueryMoodNoteManyArgs = {
  input: Page;
};


export type QueryMoodNoteOneArgs = {
  id: Scalars['ID']['input'];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Mood: Mood;
  MoodNote: ResolverTypeWrapper<MoodNote>;
  MoodNoteCreate: MoodNoteCreate;
  MoodNotePage: ResolverTypeWrapper<MoodNotePage>;
  MoodNoteUpdate: MoodNoteUpdate;
  Mutation: ResolverTypeWrapper<{}>;
  Page: Page;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Boolean: Scalars['Boolean']['output'];
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  MoodNote: MoodNote;
  MoodNoteCreate: MoodNoteCreate;
  MoodNotePage: MoodNotePage;
  MoodNoteUpdate: MoodNoteUpdate;
  Mutation: {};
  Page: Page;
  Query: {};
  String: Scalars['String']['output'];
}>;

export type MoodNoteResolvers<ContextType = InvocationContext, ParentType extends ResolversParentTypes['MoodNote'] = ResolversParentTypes['MoodNote']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  mood?: Resolver<ResolversTypes['Mood'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MoodNotePageResolvers<ContextType = InvocationContext, ParentType extends ResolversParentTypes['MoodNotePage'] = ResolversParentTypes['MoodNotePage']> = ResolversObject<{
  items?: Resolver<Array<ResolversTypes['MoodNote']>, ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = InvocationContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  moodNoteCreate?: Resolver<ResolversTypes['ID'], ParentType, ContextType, RequireFields<MutationMoodNoteCreateArgs, 'input'>>;
  moodNoteDelete?: Resolver<ResolversTypes['ID'], ParentType, ContextType, RequireFields<MutationMoodNoteDeleteArgs, 'id'>>;
  moodNoteUpdate?: Resolver<ResolversTypes['ID'], ParentType, ContextType, RequireFields<MutationMoodNoteUpdateArgs, 'id' | 'input'>>;
}>;

export type QueryResolvers<ContextType = InvocationContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  moodNoteMany?: Resolver<ResolversTypes['MoodNotePage'], ParentType, ContextType, RequireFields<QueryMoodNoteManyArgs, 'input'>>;
  moodNoteOne?: Resolver<ResolversTypes['MoodNote'], ParentType, ContextType, RequireFields<QueryMoodNoteOneArgs, 'id'>>;
}>;

export type Resolvers<ContextType = InvocationContext> = ResolversObject<{
  MoodNote?: MoodNoteResolvers<ContextType>;
  MoodNotePage?: MoodNotePageResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
}>;

