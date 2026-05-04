const BaseModel = require('./BaseModel');

class ProductModel extends BaseModel {
    constructor() {
        super();
    }

    calculateBundleDiscounts(selectedIds, minimumPrice) {
        let bundles = [];
        const allProducts = this.readAll();
        
        const selectedProducts = allProducts.filter(p => selectedIds.includes(p.id.toString()));

        // Nested Loop
        for (let i = 0; i < selectedProducts.length; i++) {
            for (let j = i + 1; j < selectedProducts.length; j++) {
                const productA = selectedProducts[i];
                const productB = selectedProducts[j];

                // Nested If
                if (productA.price > 0 && productB.price > 0) {
                    
                    if ((productA.price + productB.price) >= minimumPrice) {
                        
                        // Mathematics
                        const totalPrice = productA.price + productB.price;
                        const discount = totalPrice * 0.15; // Diskon 15%
                        const finalPrice = totalPrice - discount;

                        bundles.push({
                            bundleName: `${productA.name} + ${productB.name}`,
                            originalPrice: totalPrice,
                            discountAppied: discount,
                            finalPrice: finalPrice
                        });
                    }
                }
            }
        }
        return bundles;
    }
}

module.exports = new ProductModel();