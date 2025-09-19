const fs = require('fs');
const path = require('path');

const packagePath = path.join(
  __dirname,
  '../node_modules/react-native-date-picker/package.json',
);

try {
  const raw = fs.readFileSync(packagePath, 'utf8');
  const pkg = JSON.parse(raw);

  if (pkg?.codegenConfig?.ios?.modulesProvider) {
    delete pkg.codegenConfig.ios.modulesProvider;
    fs.writeFileSync(packagePath, JSON.stringify(pkg, null, 2));
    console.log('✔️ Patched react-native-date-picker/package.json');
  } else {
    console.log('ℹ️ modulesProvider already removed or not found.');
  }
} catch (err) {
  console.error(
    '❌ Failed to patch react-native-date-picker/package.json:',
    err,
  );
  process.exit(1);
}
