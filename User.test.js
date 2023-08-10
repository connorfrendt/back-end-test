const User = require('./User');
const { Types } = require('mongoose');

it('validates a good model', () => {
    const user = new User({name: 'Concon', favNumber: 15});
    expect(user.toJSON()).toEqual({ name: 'Concon', favNumber: 15, _id: expect.any(Types.ObjectId) });
});