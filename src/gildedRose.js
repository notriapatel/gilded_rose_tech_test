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
        this.updateBrieQuality(item)
      }
      if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
        this.updateBackstagePassQuality(item)
      }
      if (item.name != 'Aged Brie' && item.name != 'Backstage passes to a TAFKAL80ETC concert') {
        if (item.quality > 0) {
          if (item.name != 'Sulfuras, Hand of Ragnaros') {
            item.quality = item.quality - 1;
          }
        }
      } 
      if (item.name != 'Sulfuras, Hand of Ragnaros') {
        item.sellIn = item.sellIn - 1;
      }    
      if (item.sellIn < 0) {
        if (item.name != 'Aged Brie') {
          if (item.name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (item.quality > 0) {
              if (item.name != 'Sulfuras, Hand of Ragnaros') {
                item.quality = this.items[i].quality - 1;
              }
            }
          } else {
            item.quality = item.quality - item.quality;
          }
        } 
      }
    }

    return this.items;
  }

  updateBrieQuality(item) {
    if (item.sellIn > 0 && item.quality < 50) {
      item.quality += 1
    } else if (item.sellIn < 0 && item.quality < 50) {
      if (item.quality <= 48) {
        item.quality += 2
      } else {
        item.quality += 1
      }
    }
  }

  updateBackstagePassQuality(item) {
    if (item.sellIn < 0) {
      item.quality = 0
    } else {
      item.quality += 1
    }
    if (item.sellIn < 11) {
      item.quality += 1
    }
    if (item.sellIn < 6) {
      item.quality += 1
    }
  }
}
// module.exports = {
//   Item,
//   Shop
// }
