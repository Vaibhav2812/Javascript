function Person(first, last, age, gender, interests) {
    this.name = {
        first: first,
        last: last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.bio = function () {
        var string = this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. ';
        let pronoun;
        if (this.gender === 'male' || this.gender === 'm' || this.gender === 'M') {
            pronoun = 'He Likes '
        } else if (this.gender === 'male' || this.gender === 'm' || this.gender === 'M') {
            pronoun = 'She likes'
        } else {
            pronoun = 'They likes '
        }
        string += pronoun;

        if (this.interests.length === 1) {
            string += this.interests[0] + '.'
        } else if (this.interests.length === 2) {
            string += this.interests[0] + ' and ' + this.interests[1] + '.'
        } else {
            for (var i = 0; i < this.interests.length; i++) {
                if (i === this.interests.length - 1) {
                    string += 'and ' + this.interests[i] + '.'
                } else {
                    string += this.interests[i] + ', ';
                }
            }
        }

        alert(string);
    }
}

const person = new Person('vaibhav', 'patil', 25, 'male',
    ['listening music', 'having fun with friends', 'dancing', 'watching tv']);
console.log(person.name);
person.bio();
