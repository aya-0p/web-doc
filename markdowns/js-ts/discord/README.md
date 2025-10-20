- main.ts
```ts
import { Client } from "discord.js";
import {config} from "dotenv";
config();

const client = new Client({
  intents: []
});

client.login(process.env.TOKEN);

```
- tsconfig.json
```jsonc
{
  "compilerOptions": {
    "incremental": true,
    "target": "ES2022",
    "module": "NodeNext",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true,
    "sourceMap": true,
    "moduleResolution": "NodeNext",
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "noUncheckedIndexedAccess": true
  },
  "include": ["main.ts"]
}

```
