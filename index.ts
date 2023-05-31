import { BlockChain } from "./blockchain";
import { Block } from "./block";

const blockChain = new BlockChain();

const boot = () => {
    for (let i = 0; i < 50; i++) {
        const start = Date.now();
        blockChain.addNewBlock({ data: `block ${i}` });
        const end = Date.now();
        console.log(`block ${i} : ${end - start}ms`);
    }
};

boot();
