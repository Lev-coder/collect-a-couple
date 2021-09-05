class RandomMapCreation {
    constructor(icons, rows, columns, limitIconOnMap = 2) {
        this.icons = icons;
        this.rows = rows;
        this.columns = columns;
        this.limitIconOnMap = limitIconOnMap;

        this.randomIcons = [];
        this.cards = this._CreatCards(this.rows, this.columns);
    }

    CreatMap() {

        let numberIconsOnMap = (this.rows * this.columns) / this.limitIconOnMap;

        let randomIcons = this._CreatRandomIcons(numberIconsOnMap);
        let randomIndexOrder = this._CreatRandomIndexOrder(this.cards);

        this.cards = this._PutIconsInCards(randomIcons,randomIndexOrder);
        return this.cards;
    }

    _PutIconsInCards(randomIcons,randomIndexOrder)
    {
        let cards = [];
        randomIcons.forEach(icon => {
            for (let i = 0; i < this.limitIconOnMap; i++) {
                let indexCard = randomIndexOrder.pop();
                cards[indexCard] = icon;
            }
        })
        return cards;
    }

    _CreatRandomIndexOrder(array) {
        let index = array.length;
        let randomArray = [];
        while (index !== 0) {
            let randomElement = this._GetRandomIndex(array);
            if (!randomArray.includes(randomElement)) {
                randomArray.push(randomElement);
                index--;
            }
        }
        return randomArray;
    }

    _CreatRandomIcons(numberIconsOnMap) {

        for (let i = 0; i < numberIconsOnMap; i++) {
            let randomIcon = this._GetRandomIcon((this.icons))
            this.randomIcons.push(randomIcon)
        }
        return this.randomIcons
    }

    _CreatCards(rows, colums) {
        return Array(rows * colums);
    }

    _GetRandomIcon(icons) {
        let randomIcon = this._GetRandomElemtnt(icons);

        if (this._isIconInMap(randomIcon)) {
            return this._GetRandomIcon(icons);
        }

        return randomIcon;
    }

    _GetRandomElemtnt(array) {
        let randomIndex = this._GetRandomIndex(array);
        return array[randomIndex];
    }

    _GetRandomIndex(array) {
        let randomIndex = Math.floor(Math.random() * array.length);
        return randomIndex;
    }

    _isIconInMap(icon) {
        return this.randomIcons.includes(icon);
    }
}

export default RandomMapCreation;