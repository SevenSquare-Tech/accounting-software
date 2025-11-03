module.exports = function (data, transaction, models, components, cb) {
  models.Customer.findOne({
    where: {
      status: "active",
      id: data.id,
    },
  })
    .then(function (customer) {
      if (customer) {
        return models.CustomerDetail.create({
          CustomerId: customer.id,
          firmName_1: data.firmName_1,
          firmName_2: data.firmName_2,
          firmName_3: data.firmName_3,
          address_1: data.address_1,
          address_2: data.address_2,
          address_3: data.address_3,
          nip: data.nip,
        }).then(function () {
          cb(null, { success: true });
        });
      } else {
        cb(null, { success: false, error: { code: "MODEL_NOT_FOUND" } });
      }
    })
    .catch(function (err) {
      cb(err);
    });
};
