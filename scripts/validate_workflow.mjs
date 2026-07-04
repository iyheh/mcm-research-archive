import { readFileSync } from 'node:fs';

const workflow = readFileSync('.github/workflows/update_stats.yml', 'utf8');

const assertIncludes = (expected, label) => {
  if (!workflow.includes(expected)) {
    throw new Error(`${label} is missing: ${expected}`);
  }
};

const assertMatches = (pattern, label) => {
  if (!pattern.test(workflow)) {
    throw new Error(`${label} does not match: ${pattern}`);
  }
};

assertIncludes('name: Auto Update WCG Stats & Deploy', 'Workflow name');
assertIncludes('schedule:', 'Scheduled trigger');
assertMatches(/cron:\s*['"]0 \*\/6 \* \* \*['"]/, 'Six-hour stats cron schedule');
assertIncludes(
  "if: github.event_name != 'push' || contains(github.event.head_commit.message, '[run-stats]')",
  'Push stats update guard',
);
assertIncludes('uses: actions/setup-python@v5', 'Python setup step');
assertIncludes('python -m pip install --upgrade pip', 'Pip upgrade');
assertIncludes('pip install beautifulsoup4 requests', 'Python dependencies');
assertIncludes('python scripts/fetch_real_data_bs4.py', 'Stats fetch script');
assertIncludes('git add src/server_stats.json public/server_stats.json src/serverData.ts', 'Scoped stats staging');
assertIncludes('git diff --cached --quiet', 'Staged diff check');
assertIncludes('git pull --rebase --autostash origin main', 'Stats rebase before push');
assertIncludes('npm ci', 'Deterministic npm install');
assertIncludes('npm run test:workflow', 'Workflow validation before build');
assertIncludes('npm run test:content', 'Content validation before build');
assertIncludes('npm run build', 'Site build');

if (workflow.includes('git add .')) {
  throw new Error('Workflow must not stage the entire repository with git add .');
}

console.log('Workflow validation passed.');
