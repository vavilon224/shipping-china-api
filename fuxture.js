const mongoose = require("mongoose");
const config = require("./config");
const { nanoid } = require("nanoid");
const User = require("./models/User");
const Photo = require("./models/Photo");

const run = async () => {
  await mongoose.connect(config.db.url, config.db.options);

  const collections = await mongoose.connection.db.listCollections().toArray();

  for (const coll of collections) {
    await mongoose.connection.db.dropCollection(coll.name);
  }

  const [user1, user2, user3, user4] = await User.create(
    {
      email: "user1@mail.ru",
      password: "12345",
      token: nanoid(),
      displayName: "Эмиль",
    },
    {
      email: "user2@mail.ru",
      password: "12345",
      token: nanoid(),
      displayName: "Артур",
    },
    {
      email: "user3@mail.ru",
      password: "12345",
      token: nanoid(),
      displayName: "Денис",
    },
    {
      email: "user4@mail.ru",
      password: "12345",
      token: nanoid(),
      displayName: "Георгий",
    }
  );

  await Photo.create(
    {
      title: "user1Photo",
      image: "fixtures/user1Photo.jpeg",
      user: user1,
    },
    {
      title: "user1Photo2",
      image: "fixtures/user1Photo2.jpeg",
      user: user1,
    },
    {
      title: "user2Photo",
      image: "fixtures/user2Photo.jpeg",
      user: user2,
    },
    {
      title: "user2Photo2",
      image: "fixtures/user2Photo2.jpeg",
      user: user3,
    },
    {
      title: "user3Photo",
      image: "fixtures/user3Photo.jpeg",
      user: user4,
    },
    {
      title: "user3Photo2",
      image: "fixtures/user3Photo2.jpeg",
      user: user4,
    }
  );

  await mongoose.connection.close();
};

run().catch(console.error);
