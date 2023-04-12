<template>
    <div>
        <h1> A coder </h1>
        <p> {{ message }}</p>
        <Text name="testa" placeholder="Faut je la chop" label="aaa" v-model="message" />
        <Textarea name="test" label="On va tout marié des putes" v-model="message" />
        <Button text="Elle est bonne" />
    </div>
</template>


<script>
import Text from "@/components/input/InputText.vue"
import Textarea from "@/components/input/InputTextarea.vue"
import Button from "@/components/ui/UiButton.vue"

export default {
    name: 'PageDev',
    components: {
        Text,
        Textarea,
        Button
    },
    data() {
        return {
            message: "test",
        }
    },
}
</script>