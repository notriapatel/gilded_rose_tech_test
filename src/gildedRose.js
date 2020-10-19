class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      var item = this.items[i]
      if (item.name == 'Aged Brie') { 
        this._updateBrieQuality(item)
      } else if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
        this._updateBackstagePassQuality(item)
      } else if (item.name == 'Conjured') {
        this._updateConjuredQuality(item)
      } else if (item.name != 'Sulfuras, Hand of Ragnaros') {
        this._updateRegularItemQuality(item)
      }
      if (item.name != 'Sulfuras, Hand of Ragnaros') {
        this._reduceSellIn(item)
      }
    }

    return this.items;
  }

  _increaseQuality(item) {
    item.quality +=1
  }

  _reduceQuality(item) {
    item.quality -= 1
  }

  _reduceSellIn(item) {
    item.sellIn -= 1
  }

  _updateBackstagePassQuality(item) {
    if (item.sellIn > 0) {
      this._increaseQuality(item)
      if (item.sellIn < 11) {
        this._increaseQuality(item)
      }
      if (item.sellIn < 6) {
        this._increaseQuality(item)
      } 
    } else {
      item.quality = 0
    }
  }

  _updateBrieQuality(item) {
    if (item.sellIn > 0 && item.quality < 50) {
      this._increaseQuality(item)
    } else if (item.sellIn < 0 && item.quality < 50) {
      if (item.quality <= 48) {
        item.quality += 2
      } else {
        this._increaseQuality(item)
      }
    }
  }

  _updateConjuredQuality(item) {
    if (item.quality > 0) {
      if (item.sellIn > 0) {
        item.quality -= 2
      } else {
        item.quality -= 4
      }
    }
  }

  _updateRegularItemQuality(item) {
    if (item.quality > 0) {
      this._reduceQuality(item)
      if (item.sellIn < 0) {
        this._reduceQuality(item)
      }
    }
  }
}
// module.exports = {
//   Item,
//   Shop
// }
