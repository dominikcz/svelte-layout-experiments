<script>

</script>

<div>
    <nav>
        <a href="/page1/">page 1</a>
        <a href="/page2/">page 2</a>
        <a href="/page3/">page 3</a>
    </nav>
    <main>
        <slot />
    </main>
</div>

<style>
    div{
        background-color: rebeccapurple;
        display: flex;
        flex-flow: row nowrap;
        padding: 1rem;
        justify-items: stretch;
    }
    nav{
        background-color: tomato;
        display: flex;
        flex-flow: column nowrap;
        gap: 1rem;
        padding: 1rem;

    }
    main{
        background-color: gold;
        flex-grow: 1;
        padding: 1rem;
    }
</style>