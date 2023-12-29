---
labels: ['vue']
description: A ApolloClient composable.
---

Basic counter with utility functions.

## Basic Usage

```ts
import { useCounter } from "opensean.kedro-graphql-viz/composables/apollo-client";

const { count, inc, dec, set, reset } = useCounter();
```

## Usage with options

```ts
import { useCounter } from "opensean.kedro-graphql-viz/composables/apollo-client";

const { count, inc, dec, set, reset } = useCounter(1, { min: 0, max: 16 });
```
