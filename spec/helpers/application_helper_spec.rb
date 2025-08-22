# frozen_string_literal: true

require "rails_helper"

RSpec.describe(ApplicationHelper, type: :helper) do
  describe "#full_title" do
    it "returns only base_title if page_title is empty" do
      expect(helper.full_title("")).to(eq(I18n.t("app.title")))
    end

    it "concatenates page_title and base_title if page_title is present" do
      expect(helper.full_title("Products")).to(eq("Products | #{I18n.t("app.title")}"))
    end
  end
end
