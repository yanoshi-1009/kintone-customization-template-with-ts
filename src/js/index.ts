// import "../style/style.scss";

(() => {
  "use strict";
  interface KintoneEvent {
    record: kintone.types.SavedFields;
  }

  kintone.events.on("app.record.detail.show", (event: KintoneEvent) => {
    console.log("This is my kintone customization with TypeScript");

    return event;
  });
})();
