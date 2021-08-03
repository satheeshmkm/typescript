class OverrideParentTask {
    performArithmetics(a: number, b: number) {
        console.log("Sum =" + (a + b));
    }
}

class OverrideChildTask extends OverrideParentTask {
    performArithmetics(a: number, b: number) {
        console.log("Product =" + a * b);
    }
}

var parentObj = new OverrideParentTask;
parentObj.performArithmetics(10, 20);

var childObj = new OverrideChildTask;
childObj.performArithmetics(10, 20);