const ProductLicenses = Object.freeze({
  wordProcessing: 0b0000_0001,
  spreadsheets: 0b0000_0010,
  presentations: 0b0000_0100,
  emailClient: 0b0000_1000,
  notebook: 0b0001_0000,
  collaboration: 0b0010_0000,
  projectManagement: 0b0100_0000,
  publishing: 0b1000_0000
});

const personal = ProductLicenses.wordProcessing | ProductLicenses.emailClient;
const packages = {
  personal,
  work: personal |
    ProductLicenses.spreadsheets |
    ProductLicenses.presentations |
    ProductLicenses.notebook |
    ProductLicenses.collaboration,
  ultraDeluxe: 0xff
};

const licenses = packages.work;
for (const [product, mask] of Object.entries(ProductLicenses)) {
  if ((licenses & mask) === mask) {
    console.log(product);
  }
}
