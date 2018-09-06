// The standard JavaScript environment provides another data structure called Set. Like an instance of Map, a set holds a collection of values. Unlike Map, it does not associate other values with those—it just tracks which values are part of the set. A value can be part of a set only once—adding it again doesn’t have any effect.
class Group {
    constructor() {
        this.members = [];
    }

    add(value) {
        if (!this.has(value)) {
            this.members.push(value);
        }
    }

    delete(value) {
        this.members = this.members.filter(v => v !== value);
    }

    has(value) {
        return this.members.includes(value);
    }

    static from(collection) {
        let group = new Group;
        for (let value of collection) {
            group.add(value);
        }
        return group;
    }
    [Symbol.iterator]() {
        return new GroupIterator(this)
    }
}
class GroupIterator {
    constructor(group) {
        this.group = group;
        this.position = 0;
    }
    next() {
        if (this.position >= this.group.members.length) {
            return { done: true };
        } else {
            let result = {
                value: this.group.members[this.position],
                done: false
            };
            this.position++;
            return result;
        }
    }

}


for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
}