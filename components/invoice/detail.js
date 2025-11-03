module.exports = function (data, options, models, components, cb) {
  models.Invoice.findOne({
    where: {
      id: data.id,
    },
    // attributes: ['id', 'CustomerDataId', 'invoice_city', 'invoice_date', 'sale_date', 'payment_method',
    // 'invoice_number', 'value_net', 'value_vat', 'value_gross', 'actual_payment',
    // 'value_balance', 'currency', 'payment_due'],
    order: [["id", "desc"]],
    include: [
      {
        model: models.CustomerDetail,
        attributes: [
          "id",
          "firmName_1",
          "firmName_2",
          "firmName_3",
          "address_1",
          "address_2",
          "address_3",
          "nip",
        ],
      },
      {
        model: models.InvoiceItem,
        attributes: [
          "id",
          "InvoiceId",
          "name",
          "quantity",
          "unit",
          "price_net",
          "vat_rate",
          "value_net",
          "value_vat",
          "value_gross",
        ],
        order: [["id", "desc"]],
      },
      {
        model: models.ValueTaxRate,
        attributes: [
          "id",
          "InvoiceId",
          "vat_rate",
          "value_net",
          "value_vat",
          "value_gross",
        ],
        order: [["id", "desc"]],
      },
    ],
  })
    .then(function (invoice) {
      if (invoice) {
        cb(null, { success: true, invoice: invoice.toJSON() });
      } else {
        cb(null, { success: false, error: { code: "MODEL_NOT_FOUND" } });
      }
    })
    .catch(function (err) {
      cb(err);
    });
};
