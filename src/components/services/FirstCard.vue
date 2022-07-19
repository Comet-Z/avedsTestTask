<template>
  <div class="main">
    <div class="card__container">
        <div class="card__content">
            <div class="card__bg">
                <img class="card__img" src="../services/img/cardio.png" alt="">
            </div>

            <p class="card__title">
                Онлайн-прием
            </p>

            <div class="horizontal-line"></div>

            <p class="boilerplate-text">
                Рыба текст
            </p>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
/* styles for all cards */
.card__container {
    height: 248px;
    width: 300px;

    font-family: 'Montserrat';

    padding: 35px 40px 35px 40px;
    box-shadow: 0px 13px 10px rgba(0, 0, 0, 0.137);
}

.card__content {
    height: 100%;
    
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}
.card__title {
    font-weight: bold;
    font-size: 16px;
}
.card__bg {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 72px;
    height: 72px;
    
    background: #E74040;
    border-radius: 50%;
}
.card__img {
    height: 32px;
}

.horizontal-line {
    width: 50px;
    height: 2px;

    background: #E74040;
}
.boilerplate-text {
    font-size: 14px;
    color: #737373;
}
</style>