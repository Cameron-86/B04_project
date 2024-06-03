import supabase from "./supabaseClient";

export const signUp = async (email, password, nickname) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        nickname,
      },
    },
  });
  return { user: data.user, error };
};

export const signInWithEmail = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  return { user: data.user, error };
};

export const signInWithOAuth = async (provider) => {
  const { data, error } = await supabase.auth.signInWithOAuth({ provider });
  console.log("OAuth 로그인 확인", data, error);
  return { error };
};

export const signOut = async () => supabase.auth.signOut();

export const updateUserMetadata = async (metadata) => {
  const { data, error } = await supabase.auth.updateUser({
    data: metadata,
  });
  return { data, error };
};
