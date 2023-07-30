package br.com.fernandinesuplementos.loja.services.exceptions;

@SuppressWarnings("serial")
public class UnauthorizedException extends RuntimeException {

    public UnauthorizedException(String msg) {
        super(msg);
    }
}