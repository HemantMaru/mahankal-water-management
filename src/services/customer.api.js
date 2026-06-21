export const createCustomer = async (customerData) => {
  try {
    const response = await api.post("/api/customer", customerData);
    return response.data;
  } catch (error) {
    throw (
      error.response?.data || {
        success: false,
        message: "Failed to create customer",
      }
    );
    cache.error("Create customer error:", error);
  }
};

export const getCustomers = async () => {
  try {
    const response = await api.get("/api/customer");
    return response.data;
  } catch (error) {
    throw (
      error.response?.data || {
        success: false,
        message: "Failed to fetch customers",
      }
    );
    cache.error("Fetch customers error:", error);
  }
};

export const getCustomerById = async (id) => {
  try {
    const response = await api.get(`/api/customer/${id}`);
    return response.data;
  } catch (error) {
    throw (
      error.response?.data || {
        success: false,
        message: "Failed to fetch customer details",
      }
    );
    cache.error("Fetch customer by ID error:", error);
  }
};

export const deleteCustomer = async (id) => {
  try {
    const response = await api.delete(`/api/customer/${id}`);
    return response.data;
  } catch (error) {
    throw (
      error.response?.data || {
        success: false,
        message: "Failed to delete customer",
      }
    );
    cache.error("Delete customer error:", error);
  }
};

export const updateCustomer = async (id, customerData) => {
  try {
    const response = await api.patch(`/api/customer/${id}`, customerData);
    return response.data;
  } catch (error) {
    throw (
      error.response?.data || {
        success: false,
        message: "Failed to update customer",
      }
    );
    cache.error("Update customer error:", error);
  }
};
