class Counter {
    count = 0;
    inc = () => {
        this.count++;
        console.log(this.count);
    }
}

const cnt = new Counter();
cnt.inc();
cnt.inc();
