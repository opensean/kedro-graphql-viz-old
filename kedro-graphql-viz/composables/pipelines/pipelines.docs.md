---
labels: ['vue']
description: A Pipelines composable.
---

Basic counter with utility functions.

## Basic Usage

```ts
import { useCounter } from "opensean.kedro-graphql-viz/composables/pipelines";

const { count, inc, dec, set, reset } = useCounter();
```

## Usage with options

```ts
import { useCounter } from "opensean.kedro-graphql-viz/composables/pipelines";

const { count, inc, dec, set, reset } = useCounter(1, { min: 0, max: 16 });
```
