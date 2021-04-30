<template>
    <div id="app">
        {{message}}
    </div>
</template>>

<script>
    var app = new vue(
        {
            el:'#app', 
            data:{
                message: 'Hello Vue!',
            }
        }
    )
</script>
