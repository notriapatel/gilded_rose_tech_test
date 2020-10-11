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

    it("quality degrades by 2 after sellIn", function() {
      const gildedRose = new Shop([ new Item("regularItem", -1, 5)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(-2);
      expect(items[0].quality).toEqual(3)
    })
  });
});
