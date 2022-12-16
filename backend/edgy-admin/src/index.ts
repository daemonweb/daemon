export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/*{ strapi, env }*/) {

    // if(!env("SYNC_CLOVER_DATA"))
    //   return;

    // Get all items from Clover
    // For each, update or create
    
    //strapi.entityService.create("api::item.item", {
    //  data: {
        // add item here
      //}
    //})
  },
};
