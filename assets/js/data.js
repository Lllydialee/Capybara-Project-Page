// ---- Resources (top icon buttons) ----
window.PROJECT_DATA = {
  resources: [
    { label: "Paper", url: "https://arxiv.org/abs/xxxx.xxxxx", icon: "paper" },
    { label: "Code", url: "https://github.com/your/repo", icon: "code" },
    { label: "Hugging Face", url: "https://huggingface.co/your/model", icon: "hf" },
    { label: "Dataset", url: "https://huggingface.co/datasets/your/ds", icon: "db" }
  ],

  // ---- Generation: Instruct Image Generation ----
  genImages: [
    {
      title: "Case 01",
      media: "assets/img/gen/gen_01.png",
      // prompt: "A cinematic product shot of a porcelain teacup on a reflective table, soft rim light, shallow depth of field."
    },
    {
      title: "Case 02",
      media: "assets/img/gen/gen_02.png",
      // prompt: "A stylized character portrait, studio lighting, crisp linework, subtle film grain."
    },
    {
      title: "Case 03",
      media: "assets/img/gen/gen_03.png",
      // prompt: "A stylized character portrait, studio lighting, crisp linework, subtle film grain."
    },
    {
      title: "Case 04",
      media: "assets/img/gen/gen_04.png",
      // prompt: "A stylized character portrait, studio lighting, crisp linework, subtle film grain."
    },
        {
      title: "Case 05",
      media: "assets/img/gen/gen_05.png",
      // prompt: "A stylized character portrait, studio lighting, crisp linework, subtle film grain."
    },
            {
      title: "Case 06",
      media: "assets/img/gen/gen_06.png",
      // prompt: "A stylized character portrait, studio lighting, crisp linework, subtle film grain."
    },
        {
      title: "Case 07",
      media: "assets/img/gen/gen_07.png",
      // prompt: "A stylized character portrait, studio lighting, crisp linework, subtle film grain."
    },
        {
      title: "Case 08",
      media: "assets/img/gen/gen_08.png",
      // prompt: "A stylized character portrait, studio lighting, crisp linework, subtle film grain."
    },
            {
      title: "Case 09",
      media: "assets/img/gen/gen_09.png",
      // prompt: "A stylized character portrait, studio lighting, crisp linework, subtle film grain."
    }
  ],

  // ---- Generation: Instruct Video Generation ----
  genVideos: [
    {
      title: "Case 01",
      media: "assets/vid/gen/gen_01.mp4",
      poster: "assets/img/gen/gen_01.png",
      // prompt: "The red car is galloping on the track."
    },
        {
      title: "Case 02",
      media: "assets/vid/gen/gen_02.mp4",
      poster: "assets/img/gen/gen_02.png",
      // prompt: "The red car is galloping on the track."
    },
        {
      title: "Case 03",
      media: "assets/vid/gen/gen_03.mp4",
      poster: "assets/img/gen/gen_03.png",
      // prompt: "The red car is galloping on the track."
    },
        {
      title: "Case 04",
      media: "assets/vid/gen/gen_04.mp4",
      poster: "assets/img/gen/gen_04.png",
      // prompt: "The red car is galloping on the track."
    },
        {
      title: "Case 05",
      media: "assets/vid/gen/gen_05.mp4",
      poster: "assets/img/gen/gen_05.png",
      // prompt: "The red car is galloping on the track."
    },
        {
      title: "Case 06",
      media: "assets/vid/gen/gen_06.mp4",
      poster: "assets/img/gen/gen_06.png",
      // prompt: "The red car is galloping on the track."
    }
  ],

  // ---- In-Context Generation ----
  inContextGen: [
    {
      refs: ["assets/img/gen/ref_01.png"],
      outputVideo: "assets/vid/gen/ctxgen_01.mp4",
      poster: "assets/vid/gen/posters/ctxgen_01.jpg",
      instruction: "The red car is galloping on the track."
    },
    {
      refs: ["assets/img/gen/ref_02.png"],
      outputVideo: "assets/vid/gen/ctxgen_02.mp4",
      poster: "assets/vid/gen/posters/ctxgen_01.jpg",
      instruction: "A cat is licking its paws in the autumn park."
    },
        {
      refs: ["assets/img/gen/ref_03.png"],
      outputVideo: "assets/vid/gen/ctxgen_03.mp4",
      poster: "assets/vid/gen/posters/ctxgen_01.jpg",
      instruction: "Transparent umbrella by the beach, setting sun."
    },
    {
      refs: ["assets/img/gen/ref_04.png"],
      outputVideo: "assets/vid/gen/ctxgen_04.mp4",
      poster: "assets/vid/gen/posters/ctxgen_01.jpg",
      instruction: "A cartoon rabbit happily bounces and jumps on the grassland."
    }
  ],

  // ---- Image Editing (before/after slider) ----
  imageEdits: [
    {
      title: "Global Edit 01",
      before: "assets/img/edit/edit_img_01_before.jpeg",
      after:  "assets/img/edit/edit_img_01_after.png",
      prompt: "Change the time to night. Transform the sky into a late night sky with visible stars and a soft moonlight glow. Adjust the mountain\'92s lighting to reflect cool moonlight illumination, with subtle highlights along the ridges and darker shadows across the slopes. Modify the water reflection accordingly so it mirrors the night sky and moonlight consistently, maintaining realistic light balance, atmospheric depth, and natural nighttime color grading."
    },
    {
      title: "Local Edit 01",
      before: "assets/img/edit/edit_img_02_before.jpg",
      after:  "assets/img/edit/edit_img_02_after.png",
      prompt: "Replace the sparrow perched on the branch with a macaw. keep the same pose and position on the branch. high resolution}"
    },
    {
      title: "Global Edit 02",
      before: "assets/img/edit/edit_img_03_before.jpg",
      after:  "assets/img/edit/edit_img_03_after.png",
      prompt: "Replace the girl's headscarf with voluminous wavy hair, the hair should be long, flowing, large wavy hair styled with natural volume and shine, ensuring the hair is positioned behind the ear so the earring remains fully visible. Replace the original garment with a sophisticated evening dress featuring refined fabric texture, realistic folds, and subtle light reflections. Change the background into a softly blurred gala or banquet environment with warm ambient lighting, chandeliers, and elegant décor. Render the entire scene in photorealistic human style with accurate skin texture, natural lighting, depth of field, and cohesive color grading to achieve a believable real-world portrait. Keep the face and gesture of the girl and the earring's appearance unchanged."
    },
    {
      title: "Local Edit 02",
      before: "assets/img/edit/edit_img_04_before.jpg",
      after:  "assets/img/edit/edit_img_04_after.png",
      prompt: "Change the time to night. Transform the sky into a late night sky with visible stars and a soft moonlight glow. Adjust the mountain\'92s lighting to reflect cool moonlight illumination, with subtle highlights along the ridges and darker shadows across the slopes. Modify the water reflection accordingly so it mirrors the night sky and moonlight consistently, maintaining realistic light balance, atmospheric depth, and natural nighttime color grading."
    },
    {
      title: "Local Edit 03",
      before: "assets/img/edit/edit_img_05_before.jpg",
      after:  "assets/img/edit/edit_img_05_after.png",
      prompt: "Change the indoor background to an outdoor grassy field with small flowers environment. Ensure the dog remains unchanged in appearance, pose, expression, and position."
    },
    {
      title: "Local Edit 04",
      before: "assets/img/edit/edit_img_06_before.jpg",
      after:  "assets/img/edit/edit_img_06_after.png",
      prompt: "Remove the vase and flowers in front of the cat."
    },
    {
      title: "Local Edit 05",
      before: "assets/img/edit/edit_img_07_before.jpg",
      after:  "assets/img/edit/edit_img_07_after.png",
      prompt: "Add a symmetrical wing-shaped tattoo on the model’s bare upper back. Ensure it looks naturally placed and anatomically aligned. keep the model's face, the original pose, lighting, skin texture, and fabric details, and the background  unchanged."
    }
  ],

  // ---- Video Editing blocks (task-filtered) ----
  videoEditTasks: ["All", "Add", "Remove", "Local Change", "Global Change", "Dynamic Edit"],

  videoEdits: [
    {
      task: "Local Change",
      src: "assets/vid/input/edit_src_01.mp4",
      out: "assets/vid/edit/edit_out_01.mp4",
      prompt: "Replace the monkey with Ultraman. keep the Ultraman's motion matched the original running pose and motion of monkey."
    },
    {
      task: "Global Change",
      src: "assets/vid/input/edit_src_02.mp4",
      out: "assets/vid/edit/edit_out_02.mp4",
      prompt: "Change the time to night time."
    },
    {
      task: "Global Change",
      src: "assets/vid/input/edit_src_03.mp4",
      out: "assets/vid/edit/edit_out_03.mp4",
      prompt: "Transform the entire visual into a Studio Ghibli-style animated aesthetic, preserving the subject’s pose, facial expression, and spatial relationships while applying the following artistic modifications: render the woman’s skin with soft, painterly brushwork and warm, diffused lighting typical of Ghibli animation; replace her realistic clothing with stylized, flowing garments featuring hand-drawn patterns and fabric textures that appear hand-painted; convert her long hair into gently animated strands with subtle motion blur and natural movement; replace the microphone with a hand-drawn, whimsical design consistent with Ghibli’s aesthetic, such as a wooden or bamboo handle with soft shading; adjust the background elements—including the floral arrangement, wooden furniture, and walls—to adopt a hand-painted, watercolor-like texture with soft edges, gentle gradients, and dreamy atmospheric lighting; maintain the warm, golden-hour color palette of Ghibli films, with subtle pastel tones and soft shadows; ensure temporal consistency across all frames, so any movement (e.g., hand gestures) appears fluid and animated with natural motion dynamics; retain the original composition and framing, but apply Ghibli’s signature depth-of-field and soft focus to enhance the hand-drawn, storybook-like feel; avoid photorealistic details, instead emphasizing expressive lines, stylized forms, and a sense of gentle fantasy."
    },
    {
      task: "Local Change",
      src: "assets/vid/input/edit_src_04.mp4",
      out: "assets/vid/edit/edit_out_04.mp4",
      prompt: "Change the bowl to class bowl."
    },
    {
      task: "Dynamic Edit",
      src: "assets/vid/input/edit_src_05.mp4",
      out: "assets/vid/edit/edit_out_05.mp4",
      prompt: "Change the bowl to class bowl."
    }
  ],

  // ---- In-Context Editing ----
  inContextEdits: [
    {
      refs: ["assets/img/ctxedit_ref_01.jpg"],
      outputVideo: "assets/vid/ctxedit_01.mp4",
      instruction: "Use the reference object style and apply it to the target while preserving camera motion."
    }
  ],

  // // ---- Re-cam ----
  // recam: [
  //   {
  //     refVideo: "assets/vid/recam_ref_01.mp4",
  //     oriVideo: "assets/vid/recam_ori_01.mp4",
  //     outVideo: "assets/vid/recam_out_01.mp4",
  //     instruction: "Apply the camera motion pattern from the reference video onto the original scene."
  //   }
  // ]
};
