export default {
  registerCoach(context, data) {
    const userId = context.rootGetters.userId;
    console.log(data);
    const coachData = {
      id: userId,
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas,
    };
    context.commit('registerCoach', coachData);
  },
};
