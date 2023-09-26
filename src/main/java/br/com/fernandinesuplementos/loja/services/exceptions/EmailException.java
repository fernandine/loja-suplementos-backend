package br.com.fernandinesuplementos.loja.services.exceptions;

@SuppressWarnings("serial")
public class EmailException extends RuntimeException {

    public EmailException(String msg) {
        super(msg);
    }
}
