<template>
    <div class="d-flex justify-content-center text-dark mt-5">
        <h3>Task-1</h3>
    </div>

    <div class="d-flex justify-content-center text-dark mt-5 errors-box">
        <span v-for="(error, index) in errors" :key="index">{{error}}</span>
    </div>
    <div class="d-flex justify-content-center">
        <div class="form-group mt-5">
            <label for="age-input">Введіть вік</label>
            <div class="d-flex flex-row">
                <input type="number" :disabled="isAllowInput" class="form-control" id="age-input" v-model="ageValue" :class="color">
                <button class="btn btn-secondary clear" @click="clearAge">Очистити</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AgeInput",
    data() {
        return {
            color: null,
            errors: [],
        };
    },
    computed: {
        isAllowInput() {
            return this.errors.length > 0
        },
        ageValue: {
            get() {
                return this.modelValue;
            },
            set(newValue) {
                this.errors = [];
                this.ageValidate(newValue);
                this.$emit('update:modelValue', newValue)
            },
        },
    },
    props: {
        modelValue: {
            type: Number,
            required: true
        },
        modelModifiers: {
            default: () => ({}),
        },
    },
    methods: {
        clearAge() {
            this.$emit("update:modelValue", null)
            this.errors = [];
            this.color = null;
        },
        ageValidate(newValue) {
            if (this.modelModifiers.check) {
                if (newValue >= 150) {
                    this.errors.push('Age can\'t be more than 150')
                }
            }

            if (this.modelModifiers.setColor) {
                if (newValue) {
                    if (newValue < 10) {
                        this.color = 'green';
                    } else if (newValue >= 10 && newValue <= 21) {
                        this.color = 'yellow';
                    } else {
                        this.color = 'orange';
                    }
                }
            }

            if (!this.errors) {
                this.$emit("update:modelValue", newValue);
            }
        }
    }
}
</script>
