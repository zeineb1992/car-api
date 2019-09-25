const mongoose = require('mongoose');
const uniqueSlug = require('unique-slug');


const CarSchema = new mongoose.Schema({
    brand: { type: String, required: true },
    model: { type: String, required: true },
    price: { type: Number, required: true },
    slug: { type: String, unique: true, }
});

CarSchema.pre('save', function (done) {
    try {
        this.slug = uniqueSlug(this.brand + this.model + this.price);
        done();
    }
    catch  {
        done(new Error('Cannot create slug'));
    }
});

module.exports = mongoose.model('Car', CarSchema);

