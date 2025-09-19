const fs = require('fs');
const path = require('path');

const pkgPath = path.resolve(
  __dirname,
  '../node_modules/react-native-pdf/package.json',
);
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));

if (!pkg.codegenConfig.ios) {
  pkg.codegenConfig.ios = {
    componentProvider: {
      RNPDFPdfView: 'RNPDFPdfView',
    },
  };
}

fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
console.log(
  'Modified react-native-pdf codegenConfig with iOS componentProvider',
);
