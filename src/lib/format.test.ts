import { describe, expect, it } from "vitest";
import { formatPhone, onlyDigits, telLink, waLink } from "./format";

describe("formatPhone", () => {
  it("formata celular com 11 dígitos", () => {
    expect(formatPhone("18999990000")).toBe("(18) 99999-0000");
  });

  it("formata fixo com 10 dígitos", () => {
    expect(formatPhone("1800000000")).toBe("(18) 0000-0000");
  });

  it("devolve o valor original quando o tamanho não é reconhecido", () => {
    expect(formatPhone("123")).toBe("123");
  });

  it("ignora caracteres não numéricos", () => {
    expect(onlyDigits("(18) 0000-0000")).toBe("1800000000");
  });
});

describe("links de contato", () => {
  it("monta o link de WhatsApp com DDI e mensagem codificada", () => {
    expect(waLink("18000000000", "Olá, loja")).toBe(
      "https://wa.me/5518000000000?text=Ol%C3%A1%2C%20loja",
    );
  });

  it("monta o link de telefone com DDI", () => {
    expect(telLink("(18) 0000-0000")).toBe("tel:+551800000000");
  });
});
