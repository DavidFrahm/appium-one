/**
 * wdBrowser: Same as browser, just bridged
 */

/**
 * SAMPLES:
  wdBrowser.currentContext().then(function (context) {
    console.log('\n' + "Context: ", context);
  });

  wdBrowser
      .contexts().then(function (contexts) { // get list of available views. Returns array: ["NATIVE_APP","WEBVIEW_1"]
        console.log("contexts");
        console.log(contexts);
        //return wdBrowser.context(contexts[1]); // choose the webview context
      });
 */

describe('Appium app Dashboard', function () {
  beforeEach(function () {
    //browser.ignoreSynchronization = false; // Should be default
  });

  it('should always pass this true test', function () {
    expect(true).toBeTruthy();
  });


  it("should use WEBVIEW_1 as context", function (done) {
    wdBrowser.currentContext().then(function (context) {
      console.log('\n' + "Context: ", context);
      expect(context).toEqual('WEBVIEW_1');
      done();
    });
  });

  it('should be able to use wdBrowser', function (done) {
    wdBrowser.title().then(function (title) {
      expect(title).toEqual('Dashboard');
    }).nodeify(done);
  });

  // Error: TypeError: undefined is not a function
  xit('should convert to wd element', function (done) {
    //var el = element.all(by.css('.title')).get(1);
    var el = element.all(by.css('body > ion-nav-bar > div:nth-child(3) > ion-header-bar > div.title'));
    wdBrowser.wdEl(el).text()
        .then(function (text) {
          expect(text).toEqual('Dashboard');
        }).nodeify(done);
  });

  it('should convert from wd element if we give it css selector that returns only one element', function (done) {
    return wdBrowser
        .elementByCss('body > ion-nav-bar > div:nth-child(3) > ion-header-bar > div.title')
        .then(function (el) {
          return wdBrowser.swEl(el).getText()
              .then(function (text) {
                expect(text).toEqual('Dashboard');
              });
        }).nodeify(done);
  });

  // NB: Note plural elementsByCss()
  it('should convert from wd element if we give it css selector that returns multiple elements', function (done) {
    return wdBrowser
        .elementsByCss('.title')
        .then(function (el) {
          return wdBrowser.swEl(el[1]).getText()
              .then(function (text) {
                expect(text).toEqual('Dashboard');
              });
        }).nodeify(done);
  });

  xit('should be as normal Protractor test as possible', function () {

    //console.log("wdBrowser:");
    //console.log(wdBrowser);

    //wdBrowser.currentContext().then(function (context) {
    //  console.log("context start:");
    //  console.log(context);
    //});

    //wdBrowser
    //    .contexts().then(function (contexts) { // get list of available views. Returns array: ["NATIVE_APP","WEBVIEW_1"]
    //      console.log("contexts");
    //      console.log(contexts);
    //      //return wdBrowser.context(contexts[1]); // choose the webview context
    //    });

    //wdBrowser.currentContext().then(function (context) {
    //  console.log("context ready:");
    //  console.log(context);
    //});

    //browser.get('http://localhost:8100');
    //wdBrowser.get('http://localhost:8100');

    console.log("expect before");
    //console.log("actual", element.all(by.css('.title')).get(1));
    //element.all(by.css('.title')).get(1)
    //    .then(function (theText) {
    //      console.log("expect then", theText);
    //      //expect(theText).toEqual('Dashboard');
    //    });
    //expect(element.all(by.css('.title')).get(1).getText()).toEqual('Dashboard');

    //expect(element(by.css('.title')).getText()).toEqual('Dashboard');

    //element.all(by.css('.title')).get(1).getText()
    //    .then(function (theText) {
    //      console.log("expect then", theText);
    //      expect(theText).toEqual('Dashboard');
    //      done();
    //    });

    console.log("expect after");
    //done();
  });

});
