describe("Gilded Rose", function() {

  it("should foo", function() {
    const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("foo");
  });

  describe("regular items", function() {
    it("quality decreases by 1 before sellIn", function() {
      const gildedRose = new Shop([ new Item("regularItem", 5, 5) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(4);
      expect(items[0].quality).toEqual(4)
    });

    it("quality decreases by 2 after sellIn", function() {
      const gildedRose = new Shop([ new Item("regularItem", -1, 5)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(-2);
      expect(items[0].quality).toEqual(3)
    });

    it("quality never goes below 0", function() {
      const gildedRose = new Shop([ new Item("regularItem", 2, 0)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(1);
      expect(items[0].quality).toEqual(0);
    });
  });

  describe("Aged Brie", function() {
    it("quality increases by 1 before sellIn", function() {
      const gildedRose = new Shop([ new Item("Aged Brie", 5, 5)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(4)
      expect(items[0].quality).toEqual(6)
    });

    it("quality increases by 2 after sellIn", function() {
      const gildedRose = new Shop([ new Item("Aged Brie", -2, 5)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(-3)
      expect(items[0].quality).toEqual(7)
    });

    it("quality is capped at 50", function() {
      const gildedRose = new Shop([ new Item("Aged Brie", 5, 50)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(4)
      expect(items[0].quality).toEqual(50)
    });
  });

  describe("Sulfuras, Hand of Ragnaros", function() {
    it("quality and sellIn don't change, quality is always 80", function() {
      const gildedRose = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 5, 80)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(5)
      expect(items[0].quality).toEqual(80)
    });
  });

  describe("Backstage passes", function() {
    it("quality increases by 1 when sellIn > 10", function() {
      const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 11, 5)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(10)
      expect(items[0].quality).toEqual(6)
    });

    it("quality increases by 2 when 5 < sellIn <= 10", function () {
      const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 9, 5)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(8)
      expect(items[0].quality).toEqual(7)
    });
  });
});
