document.querySelectorAll('.range_box input').forEach(item => {

    item.addEventListener('mousemove', function () {

        this.closest('.range_box').querySelector('.rangeValue').innerHTML = this.value;
    })

});