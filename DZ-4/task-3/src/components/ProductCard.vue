<template>
    <div class="product-card-box" v-for="product in productData" :key="product.id">
        <div class="product-image-box">
            <img :src="product.imgSrc" class="product-image" alt="">
        </div>
        <div class="product-info-box">
            <div class="d-flex product-info-title">
                {{product.title}}
            </div>

            <div class="d-flex product-info-discount">
                Ваша економія: <span class="product-info-discount-price">{{product.discount}} ₴</span>
            </div>

            <div class="d-flex">
                <span class="product-old-price">{{product.oldPrice}} ₴</span>
            </div>
            <div class="row">
                <div class="col-8">
                    <span class="product-price">{{product.price}}</span>
                    <span class="product-price-currency"> ₴</span>
                </div>

                <div class="col-4">
                    <button class="btn btn-success">Купити</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProductCard",
        props: {
            productData: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style scoped>
    .product-card-box {
        display: flex;
        flex-direction: row;
        padding: 24px 0;
        border-bottom: 1px solid #e7e6e6;
    }
    .product-image-box,
    .product-image {
        width: 140px;
    }

    .product-info-box {
        display: flex;
        flex-direction: column;
        padding-left: 20px;
        width: 300px;
    }

    .product-info-title {
        color: #57acf6;
        font-weight: 500;
    }
    .product-info-discount {
        font-size: 10px;
        color: #2a2a2a;
        font-weight: 500;
    }

    .product-info-discount-price {
        margin-left: 5px;
        color: #ea4949;
        font-size: 10px;
    }

    .product-old-price {
        color: #a1a1a1;
        margin-top: 10px;
        font-size: 14px;
        text-decoration: line-through
    }

    .product-price {
        color: #b21c1c;
        font-size: 24px;
    }

    .product-price-currency {
        color: #b21c1c;
        font-size: 14px;
    }
</style>