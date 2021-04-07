module.exports = mongoose => {
    const Task = mongoose.model(
      "task",
      mongoose.Schema(
        {
          name: String,
          date: Date,
          status: Boolean
        },
        { timestamps: true }
      )
    );
    return Task;
};