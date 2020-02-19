//FacetContext._sortBy = "-date";
FacetContext.initialBuild = function() {
    if (this.searcher)
      QueryExplanation.setFulltext(this.searcher);
    else
      QueryExplanation.setQuery(this.collection.query);
    // we like to sort them so should clone the list
    this.faceters = this.facetDriver.faceters.concat();

    this._timelineShown = !Services.prefs.getBoolPref("gloda.facetview.hidetimeline");

    this.everFaceted = false;
    this._activeConstraints = {};
/*modified section*/
this._sortBy = "-date";
//    if (this.searcher)
//      this._sortBy = "-dascore";
//    else
//      this._sortBy = "-date";
/*end modified section*/
    this.fullSet = this._removeDupes(this._collection.items.concat());
    if ("IMCollection" in this)
      this.fullSet = this.fullSet.concat(this.IMCollection.items);
    this.build(this.fullSet);

  }