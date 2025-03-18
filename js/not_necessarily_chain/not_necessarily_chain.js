const user = {
    name: "Олексій",
    address: {
        street: "Шевченка",
        city: "Львів",
    }
};

const defaultCity = undefined;

console.log(user.address?.city || defaultCity, "unknown city");