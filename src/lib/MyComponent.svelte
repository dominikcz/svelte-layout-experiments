<script>
	let rand = [1, 2, 3, 4, 5];
    function randomInt(max){
        return Math.floor(Math.random() * (max + 1));
    }
</script>

<div class="val">
    {rand[randomInt(rand.length)]}
</div>
