module.exports = function (data, options, models, components, cb) {
  var _customer;
  models.sequelize.transaction().then(function (t) {
    models.Customer.create({}, { transaction: t })
      .then(function (customer) {
        _customer = customer;
        return models.CustomerDetail.create(
          {
            CustomerId: customer.id,
            firmName_1: data.firmName_1,
            firmName_2: data.firmName_2,
            firmName_3: data.firmName_3,
            address_1: data.address_1,
            address_2: data.address_2,
            address_3: data.address_3,
            nip: data.nip,
          },
          { transaction: t }
        );
      })
      .then(function () {
        t.commit().then(function () {
          cb(null, { success: true, id: _customer.id });
        });
      })
      .catch(function (err) {
        t.rollback();
        cb(err);
      });
  });
};
