package com.github.vagakey.backend.config;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class LoggerConfig {
    private final static String getClassName(int depth) {
        return Thread.currentThread().getStackTrace()[depth].getClassName();
    }

    private final static String getMethodName(int depth) {
        return Thread.currentThread().getStackTrace()[depth].getMethodName();
    }

    private final static int getLineNumber(int depth) {
        return Thread.currentThread().getStackTrace()[depth].getLineNumber();
    }

    public final static Logger getLogger() {
        return LoggerFactory.getLogger(getClassName(3) + "  --> " + getLineNumber(3));
    }
}