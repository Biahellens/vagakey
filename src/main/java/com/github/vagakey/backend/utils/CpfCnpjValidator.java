package com.github.vagakey.backend.utils;

import java.util.regex.Pattern;

public class CpfCnpjValidator {

    // Expressões regulares para CPF e CNPJ
    private static final String CPF_REGEX = "\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}";
    private static final String CNPJ_REGEX = "\\d{2}\\.\\d{3}\\.\\d{3}/\\d{4}-\\d{2}";

    public static boolean isCpf(String input) {
        return Pattern.matches(CPF_REGEX, input);
    }

    public static boolean isCnpj(String input) {
        return Pattern.matches(CNPJ_REGEX, input);
    }

}
