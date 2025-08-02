import React from "react";
import "../Styles/AskQuestion.css";

const AskQuestionForm = () => {
  return (
    <div class="form-container">
    <form>
      <div class="form-group">
        <label for="question">Question</label>
        <input type="text" id="question" name="question" placeholder="Enter your question" />
      </div>

      <div class="form-group">
        <label for="description">Description</label>
        <textarea id="description" name="description" rows="5" placeholder="Enter the description"></textarea>
      </div>

      <div class="form-group">
        <label for="category">Category</label>
        <select id="category" name="category">
          <option value="technical">Technical</option>
          <option value="nontechnical">Non-Technical</option>
          <option value="general">General</option>
        </select>
      </div>

      <button type="submit">Post</button>
    </form>
  </div>

  );
};

export default AskQuestionForm;
